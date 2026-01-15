'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import { getAssetPath } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Block body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

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
        <Link href="/" className="hover:opacity-80 transition-smooth">
          <Image
            src={getAssetPath("/logo.png")}
            alt="3D GRYZ"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`hover:text-accent-purple transition-smooth uppercase text-sm font-medium ${pathname === '/' ? 'text-accent-purple' : 'text-text-secondary'}`}
          >
            {t.header.home}
          </Link>
          <Link
            href="/about"
            className={`hover:text-accent-purple transition-smooth uppercase text-sm font-medium ${pathname === '/about' ? 'text-accent-purple' : 'text-text-secondary'}`}
          >
            {t.header.about}
          </Link>
          <Link
            href="/services"
            className={`hover:text-accent-purple transition-smooth uppercase text-sm font-medium ${pathname === '/services' ? 'text-accent-purple' : 'text-text-secondary'}`}
          >
            {t.header.services}
          </Link>
          <Link
            href="/portfolio"
            className={`hover:text-accent-purple transition-smooth uppercase text-sm font-medium ${pathname === '/portfolio' ? 'text-accent-purple' : 'text-text-secondary'}`}
          >
            {t.header.portfolio}
          </Link>
          <Link
            href="/ai-content"
            className={`hover:text-accent-purple transition-smooth uppercase text-sm font-medium ${pathname === '/ai-content' ? 'text-accent-purple' : 'text-text-secondary'}`}
          >
            {t.header.aiContent}
          </Link>
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
          <Link href="/get-concept" className="px-6 py-3 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-sm hover:glow-lime hover:scale-105 transition-all duration-300 shine-button">
            {t.header.getConcept}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-text-primary rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-text-primary rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-text-primary rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-bg-dark z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-6 px-6 pt-20">
          <Link
            href="/"
            className={`text-2xl font-bold uppercase ${pathname === '/' ? 'text-accent-purple' : 'text-text-primary'}`}
          >
            {t.header.home}
          </Link>
          <Link
            href="/about"
            className={`text-2xl font-bold uppercase ${pathname === '/about' ? 'text-accent-purple' : 'text-text-primary'}`}
          >
            {t.header.about}
          </Link>
          <Link
            href="/services"
            className={`text-2xl font-bold uppercase ${pathname === '/services' ? 'text-accent-purple' : 'text-text-primary'}`}
          >
            {t.header.services}
          </Link>
          <Link
            href="/portfolio"
            className={`text-2xl font-bold uppercase ${pathname === '/portfolio' ? 'text-accent-purple' : 'text-text-primary'}`}
          >
            {t.header.portfolio}
          </Link>
          <Link
            href="/ai-content"
            className={`text-2xl font-bold uppercase ${pathname === '/ai-content' ? 'text-accent-purple' : 'text-text-primary'}`}
          >
            {t.header.aiContent}
          </Link>
          <a
            href="https://blenderverse.getcourse.ru/MainPageNew"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold uppercase text-text-primary"
          >
            {t.header.school}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border border-white/10 rounded-lg p-1 mt-4">
            <button
              onClick={() => setLanguage('ru')}
              className={`px-4 py-2 rounded text-sm font-medium uppercase transition-smooth ${
                language === 'ru'
                  ? 'bg-accent-purple text-white'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded text-sm font-medium uppercase transition-smooth ${
                language === 'en'
                  ? 'bg-accent-purple text-white'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <Link
            href="/get-concept"
            className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base hover:glow-lime transition-all duration-300 mt-4"
          >
            {t.header.getConcept}
          </Link>
        </nav>
      </div>
    </header>
  )
}
