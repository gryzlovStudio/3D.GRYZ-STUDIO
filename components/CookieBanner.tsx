'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from './YandexMetrika'

export function CookieBanner() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Small delay for slide-up animation
      requestAnimationFrame(() => setVisible(true))
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setVisible(false)
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined')
    setVisible(false)
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-slide-up"
    >
      <div className="max-w-4xl mx-auto glass-border rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-300 flex-1">
          {t.cookieBanner.text}{' '}
          <Link
            href="/privacy-policy"
            className="text-accent-lime hover:underline"
          >
            {t.cookieBanner.learnMore}
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm rounded-lg border border-white/10 text-gray-300 hover:border-white/30 hover:text-white transition-all cursor-pointer"
          >
            {t.cookieBanner.decline}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-accent-lime to-accent-gold text-bg-dark font-bold uppercase hover:glow-lime hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {t.cookieBanner.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
