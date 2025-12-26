'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-pink rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl font-mono">3D</span>
          </div>
          <span className="text-xl font-bold font-mono uppercase">GRYZ</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-text-secondary hover:text-accent-purple transition-smooth uppercase text-sm font-medium"
          >
            Главная
          </a>
          <a
            href="/about"
            className="text-text-secondary hover:text-accent-purple transition-smooth uppercase text-sm font-medium"
          >
            О нас
          </a>
          <a
            href="/services"
            className="text-text-secondary hover:text-accent-purple transition-smooth uppercase text-sm font-medium"
          >
            Услуги
          </a>
          <a
            href="/portfolio"
            className="text-text-secondary hover:text-accent-purple transition-smooth uppercase text-sm font-medium"
          >
            Портфолио
          </a>
          <a
            href="/ai-content"
            className="text-text-secondary hover:text-accent-purple transition-smooth uppercase text-sm font-medium"
          >
            ИИ-контент
          </a>
          <a
            href="https://blenderverse.getcourse.ru/MainPageNew"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-pink transition-smooth uppercase text-sm font-medium"
          >
            Школа
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border border-white/10 rounded-lg p-1">
            <button className="px-3 py-1 bg-accent-purple rounded text-xs font-medium uppercase">
              RU
            </button>
            <button className="px-3 py-1 text-text-muted hover:text-text-primary transition-smooth text-xs font-medium uppercase">
              EN
            </button>
          </div>

          {/* CTA Button */}
          <a href="/get-concept" className="px-6 py-3 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-sm hover:glow-lime hover:scale-105 transition-all duration-300 shine-button">
            Получить концепт
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
