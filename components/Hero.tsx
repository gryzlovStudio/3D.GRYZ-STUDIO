'use client'

import { useLanguage } from '@/lib/i18n'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-16 md:pb-24">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-bg-dark/60"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(107, 42, 255, 0.3) 0%, rgba(10, 10, 15, 0.7) 50%, rgba(255, 107, 157, 0.2) 100%)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="text-hero font-black uppercase mb-6 leading-tight">
          <span className="gradient-text">{t.hero.title1}</span><br />
          {t.hero.title2}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/get-concept" className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base hover:glow-lime hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center shine-button">
            {t.hero.cta}
          </a>
          <a href="/services" className="px-8 py-4 border border-accent-purple rounded-lg text-text-primary font-bold uppercase text-base hover:bg-accent-purple/20 hover:glow-purple transition-smooth w-full sm:w-auto text-center">
            {t.hero.servicesBtn}
          </a>
        </div>
      </div>
    </section>
  )
}
