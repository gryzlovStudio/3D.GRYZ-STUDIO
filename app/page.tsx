'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import Process from '@/components/Process'
import Cases from '@/components/Cases'
import WhyUs from '@/components/WhyUs'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/i18n'

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PainPoints />
      <Process />
      <Cases />
      <WhyUs />

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-accent-pink/15 to-accent-purple/10"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-display font-black uppercase mb-6">
            {t.homeCta.title} <span className="gradient-text">{t.homeCta.titleHighlight}</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            {t.homeCta.subtitle}
          </p>

          <div className="flex justify-center">
            <a href="/get-concept" className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base hover:glow-lime hover:scale-105 transition-all duration-300 text-center shine-button">
              {t.homeCta.button}
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 text-sm text-text-muted">
            <a href="mailto:gryzlovstudio@gmail.com" className="hover:text-accent-lime transition-smooth">
              gryzlovstudio@gmail.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="https://t.me/ddd_gryz" className="hover:text-accent-lime transition-smooth">
              Telegram: @ddd_gryz
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
