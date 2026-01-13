'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="hover:opacity-80 transition-smooth">
          <Image
            src="/logo.png"
            alt="3D GRYZ"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className={`hover:text-accent-purple transition-smooth uppercase text-sm font-medium ${pathname === '/' ? 'text-accent-purple' : 'text-text-secondary'}`}
          >
            {t.header.home}
          </a>
          <a
            href="/about"
            className={`hover:text-accent-purple transition-smooth uppercase text-sm font-medium ${pathname === '/about' ? 'text-accent-purple' : 'text-text-secondary'}`}
          >
            {t.header.about}
          </a>
          <a
            href="/services"
            className={`hover:text-accent-purple transition-smooth uppercase text-sm font-medium ${pathname === '/services' ? 'text-accent-purple' : 'text-text-secondary'}`}
          >
            {t.header.services}
          </a>
          <a
            href="/portfolio"
            className={`hover:text-accent-purple transition-smooth uppercase text-sm font-medium ${pathname === '/portfolio' ? 'text-accent-purple' : 'text-text-secondary'}`}
          >
            {t.header.portfolio}
          </a>
          <a
            href="/ai-content"
            className={`hover:text-accent-purple transition-smooth uppercase text-sm font-medium ${pathname === '/ai-content' ? 'text-accent-purple' : 'text-text-secondary'}`}
          >
            {t.header.aiContent}
          </a>
          <a
            href="https://blenderverse.getcourse.ru/MainPageNew"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-pink transition-smooth uppercase text-sm font-medium"
          >
            {t.header.school}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border border-white/10 rounded-lg p-1">
            <button
              onClick={() => setLanguage('ru')}
              className={`px-3 py-1 rounded text-xs font-medium uppercase transition-smooth ${
                language === 'ru'
                  ? 'bg-accent-purple text-white'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-xs font-medium uppercase transition-smooth ${
                language === 'en'
                  ? 'bg-accent-purple text-white'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <a href="/get-concept" className="px-6 py-3 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-sm hover:glow-lime hover:scale-105 transition-all duration-300 shine-button">
            {t.header.getConcept}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
          <span className="w-6 h-0.5 bg-text-primary rounded"></span>
          <span className="w-6 h-0.5 bg-text-primary rounded"></span>
          <span className="w-6 h-0.5 bg-text-primary rounded"></span>
        </button>
      </div>
    </header>
  )
}
