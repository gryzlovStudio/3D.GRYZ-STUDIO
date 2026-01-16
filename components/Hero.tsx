'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Video - Vimeo */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1153933439?background=1&autoplay=1&loop=1&muted=1&quality=1080p"
          className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-bg-dark/50"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(107, 42, 255, 0.3) 0%, rgba(10, 10, 15, 0.7) 50%, rgba(255, 107, 157, 0.2) 100%)'
        }}
      ></div>

      {/* Main Title - Center Top */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-20 md:pt-32 px-4">
        <h1 className="text-hero font-black uppercase leading-tight text-center px-2">
          <span className="gradient-text">{t.hero.title1}</span><br />
          {t.hero.title2}
        </h1>
        <p className="text-xl md:text-3xl font-bold text-accent-lime mt-4 uppercase tracking-wider text-center">
          + AI Production
        </p>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-24 w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-end lg:items-end">
          {/* Left Side - Main subtitle and CTAs */}
          <div className="flex-1">
            <p className="text-xl md:text-2xl text-text-primary mb-6 max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-concept" className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base hover:glow-lime hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center shine-button">
                {t.hero.cta}
              </Link>
              <Link href="/services" className="px-8 py-4 border border-accent-purple rounded-lg text-text-primary font-bold uppercase text-base hover:bg-accent-purple/20 hover:glow-purple transition-smooth w-full sm:w-auto text-center">
                {t.hero.servicesBtn}
              </Link>
            </div>
          </div>

          {/* Right Side - Additional text */}
          <div className="lg:max-w-sm hidden lg:block">
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
