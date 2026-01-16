'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function WhyUs() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-darker/50 to-bg-dark"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4">
            {t.whyUs.title} <span className="gradient-text">{t.whyUs.titleHighlight}</span>
          </h2>
          <p className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Desktop: Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {t.whyUs.features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-bg-darker/80 to-bg-dark/80 backdrop-blur-sm hover:border-accent-lime/50 transition-all duration-300">
                {/* Title with hover scale */}
                <h3 className="text-2xl font-bold mb-4 gradient-text-lime-gold transform group-hover:scale-110 transition-transform duration-300 origin-left whitespace-pre-line">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-lime/10 to-transparent rounded-tr-2xl"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'radial-gradient(circle at center, rgba(188, 240, 0, 0.2), transparent 70%)'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {t.whyUs.features.map((feature, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden bg-bg-darker/50 backdrop-blur-sm"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-bold gradient-text-lime-gold whitespace-pre-line">
                  {feature.title}
                </h3>
                <svg
                  className={`w-5 h-5 text-accent-lime transition-transform duration-300 flex-shrink-0 ml-3 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-4 text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* About Us CTA */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            href="/about"
            className="inline-block px-6 py-3 md:px-8 md:py-4 border border-accent-lime rounded-lg text-text-primary font-bold uppercase text-sm md:text-base hover:bg-accent-lime/20 hover:scale-105 hover:glow-lime transition-all duration-300"
          >
            {t.whyUs.aboutBtn}
          </Link>
        </div>
      </div>
    </section>
  )
}
