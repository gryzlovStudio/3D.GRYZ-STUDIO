'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const METRIKA_ID = 106307550
export const COOKIE_CONSENT_KEY = '3dgryz-cookie-consent'
export const COOKIE_CONSENT_EVENT = 'cookie-consent-changed'

export function YandexMetrika() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    // Check initial consent state
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (consent === 'accepted') {
      setConsentGiven(true)
    }

    // Listen for consent changes
    const handleConsentChange = () => {
      const updated = localStorage.getItem(COOKIE_CONSENT_KEY)
      if (updated === 'accepted') {
        setConsentGiven(true)
      }
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange)
    window.addEventListener('storage', handleConsentChange)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange)
      window.removeEventListener('storage', handleConsentChange)
    }
  }, [])

  useEffect(() => {
    if (consentGiven && typeof window !== 'undefined' && window.ym) {
      window.ym(METRIKA_ID, 'hit', window.location.href)
    }
  }, [pathname, searchParams, consentGiven])

  if (!consentGiven) {
    return null
  }

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(${METRIKA_ID}, 'init', {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
              ecommerce: 'dataLayer'
            });
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  )
}

declare global {
  interface Window {
    ym: (id: number, action: string, url?: string) => void
  }
}
