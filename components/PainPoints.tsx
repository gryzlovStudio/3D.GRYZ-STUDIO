'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'

export default function PainPoints() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-darker to-bg-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4 leading-tight">
            {t.painPoints.title}<br /> <span className="gradient-text">{t.painPoints.titleHighlight}</span>
          </h2>
        </div>

        {/* Desktop: Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {t.painPoints.items.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-bg-darker/50 backdrop-blur-sm hover:border-accent-purple/50 transition-all duration-300 hover:glow-purple flex flex-col">
                {/* Problem as centered bold heading with fixed height */}
                <h3 className="text-lg font-bold text-text-primary mb-6 leading-relaxed text-center min-h-[80px] flex items-center justify-center">
                  {item.problem}
                </h3>

                {/* Solution without arrow */}
                <div className="space-y-2 mt-auto min-h-[140px] flex flex-col justify-end">
                  <p className="text-sm uppercase font-bold text-accent-lime text-center">{t.painPoints.solutionLabel}</p>
                  <p className="text-text-secondary text-base leading-relaxed text-center">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'radial-gradient(circle at center, rgba(107, 42, 255, 0.3), transparent 70%)'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {t.painPoints.items.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden bg-bg-darker/50 backdrop-blur-sm"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <h3 className="text-base font-bold text-text-primary pr-3">
                  {item.problem}
                </h3>
                <svg
                  className={`w-5 h-5 text-accent-purple transition-transform duration-300 flex-shrink-0 ${
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
                  openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-4">
                  <p className="text-xs uppercase font-bold text-accent-lime mb-2">{t.painPoints.solutionLabel}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
