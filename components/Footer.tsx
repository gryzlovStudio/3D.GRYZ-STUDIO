'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import { getAssetPath } from '@/lib/utils'

export default function Footer() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <footer className="relative py-12 md:py-10 px-6 border-t border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/10 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Mobile: Logo on top */}
        <div className="md:hidden mb-8">
          <div className="mb-4">
            <Image
              src={getAssetPath("/logo.png")}
              alt="3D GRYZ"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-text-muted text-sm max-w-xs">
            {t.footer.tagline}
          </p>
        </div>

        {/* Mobile: Company and Contact side by side */}
        <div className="grid grid-cols-2 gap-8 mb-8 md:hidden">
          {/* Company */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm">{t.footer.company}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  {t.header.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  {t.header.services}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  {t.header.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/ai-content" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  {t.header.aiContent}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm">{t.footer.contacts}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:gryzlovstudio@gmail.com"
                  className="text-text-muted hover:text-accent-lime transition-smooth text-sm"
                  onClick={() => (window as any).ym?.(106307550, 'reachGoal', 'click_email')}
                >
                  Почта
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/ddd_gryz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-lime transition-smooth text-sm"
                  onClick={() => (window as any).ym?.(106307550, 'reachGoal', 'click_telegram')}
                >
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/3d.gryz?igsh=Ynlobm9qOGRsOW1w&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/gryzlovstudio" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop: All 3 blocks in one row */}
        <div className="hidden md:flex md:justify-between mb-8">
          {/* Brand */}
          <div className="flex-1">
            <div className="mb-3">
              <Image
                src={getAssetPath("/logo.png")}
                alt="3D GRYZ"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-text-muted text-sm max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Company and Contacts together on the right */}
          <div className="flex gap-16">
            {/* Company */}
            <div>
              <h4 className="font-bold uppercase mb-4 text-sm">{t.footer.company}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                    {t.header.about}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                    {t.header.services}
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                    {t.header.portfolio}
                  </Link>
                </li>
                <li>
                  <Link href="/ai-content" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                    {t.header.aiContent}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold uppercase mb-4 text-sm">{t.footer.contacts}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:gryzlovstudio@gmail.com"
                    className="text-text-muted hover:text-accent-lime transition-smooth text-sm"
                    onClick={() => (window as any).ym?.(106307550, 'reachGoal', 'click_email')}
                  >
                    gryzlovstudio@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/ddd_gryz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent-lime transition-smooth text-sm"
                    onClick={() => (window as any).ym?.(106307550, 'reachGoal', 'click_telegram')}
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/3d.gryz?igsh=Ynlobm9qOGRsOW1w&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/gryzlovstudio" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                    Behance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-text-muted text-sm">
                {t.footer.rights}
              </p>
              <span className="text-text-muted hidden md:inline">|</span>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <Link href="/privacy-policy" className="text-text-muted hover:text-accent-lime transition-smooth text-xs">
                  {t.footer.privacyPolicy}
                </Link>
                <span className="text-text-muted hidden md:inline">|</span>
                <Link href="/personal-data" className="text-text-muted hover:text-accent-lime transition-smooth text-xs">
                  {t.footer.personalData}
                </Link>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex gap-4">
              <button
                onClick={() => setLanguage('ru')}
                className={`transition-smooth text-sm uppercase ${
                  language === 'ru'
                    ? 'text-accent-lime'
                    : 'text-text-muted hover:text-accent-lime'
                }`}
              >
                RU
              </button>
              <span className="text-text-muted">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-smooth text-sm uppercase ${
                  language === 'en'
                    ? 'text-accent-lime'
                    : 'text-text-muted hover:text-accent-lime'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
