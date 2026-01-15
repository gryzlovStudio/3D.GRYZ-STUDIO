'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/i18n'

export default function AIContentPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 md:px-6 relative min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(78, 0, 239, 0.2) 0%, rgba(10, 10, 15, 1) 70%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-8xl font-black uppercase leading-tight mb-8">
            {t.aiContent.hero.title1}<br />
            <span className="gradient-text">{t.aiContent.hero.title2}</span>
          </h1>
          <p className="text-base md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12">
            {t.aiContent.hero.subtitle1} <span className="text-accent-lime font-bold">{t.aiContent.hero.subtitle2}</span> {t.aiContent.hero.subtitle3}
          </p>

          <Link href="/get-concept" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base md:text-lg hover:glow-lime hover:scale-105 transition-all duration-300 shine-button">
            {t.aiContent.hero.cta}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-40 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* What is AI Content */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-12 md:mb-16 text-center">
            {t.aiContent.what.title} <span className="gradient-text-gold-purple">{t.aiContent.what.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>{t.aiContent.what.text1}</p>
              <p>{t.aiContent.what.text2}</p>
              <p className="text-accent-lime font-bold text-xl">{t.aiContent.what.text3}</p>
            </div>

            {/* Right - Visual */}
            <div className="glass rounded-2xl p-12 text-center flex flex-col items-center justify-center">
              <div className="text-6xl font-black font-mono text-accent-lime mb-4">
                5-10x
              </div>
              <div className="text-xl uppercase font-bold">
                {t.aiContent.what.speedup}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-purple/5 to-bg-dark"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-12 md:mb-16 text-center">
            {t.aiContent.capabilities.title} <span className="gradient-text">{t.aiContent.capabilities.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {t.aiContent.capabilities.items.map((capability, i) => (
              <div key={i} className="glass rounded-xl p-6 md:p-8 hover:border-accent-lime transition-all">
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 text-accent-gold">
                  {capability.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {capability.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Traditional vs AI */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-12 md:mb-16 text-center">
            {t.aiContent.comparison.title} <span className="gradient-text">{t.aiContent.comparison.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Without AI */}
            <div className="glass rounded-2xl p-6 md:p-8 border-text-muted/20">
              <h3 className="text-xl md:text-3xl font-bold uppercase mb-6 md:mb-8 text-text-secondary">
                {t.aiContent.comparison.without.title}
              </h3>
              <ul className="space-y-4">
                {t.aiContent.comparison.without.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-text-muted text-xl">•</span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With AI */}
            <div className="glass rounded-2xl p-6 md:p-8 border-accent-lime/30 bg-gradient-to-br from-accent-lime/5 to-transparent">
              <h3 className="text-xl md:text-3xl font-bold uppercase mb-6 md:mb-8 text-accent-lime">
                {t.aiContent.comparison.with.title}
              </h3>
              <ul className="space-y-4">
                {t.aiContent.comparison.with.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent-lime text-xl">✓</span>
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6">
            {t.aiContent.cta.title} <span className="gradient-text-gold-purple">{t.aiContent.cta.titleHighlight}</span>
          </h2>
          <p className="text-base md:text-xl text-text-secondary mb-12">
            {t.aiContent.cta.subtitle}
          </p>

          <Link href="/get-concept" className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base md:text-lg hover:glow-lime hover:scale-105 transition-all duration-300 shine-button inline-block">
            {t.aiContent.cta.button}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
