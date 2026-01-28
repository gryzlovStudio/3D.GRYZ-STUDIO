'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function Process() {
  const { t } = useLanguage()

  return (
    <section className="py-24 2xl:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-bg-dark to-accent-pink/5"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(188, 240, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(188, 240, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl 2xl:max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black uppercase mb-4">
            {t.process.title} <span className="gradient-text">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-xl 2xl:text-2xl text-text-secondary max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 2xl:gap-10">
          {t.process.steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connection line (for desktop) */}
              {index < t.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent-purple to-transparent z-0"></div>
              )}

              {/* Card */}
              <div className="relative h-full p-8 2xl:p-10 rounded-2xl border border-white/10 bg-bg-darker/80 backdrop-blur-sm hover:border-accent-lime/50 transition-all duration-300 hover:glow-lime">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 2xl:w-20 2xl:h-20 rounded-2xl bg-gradient-to-br from-accent-lime to-accent-gold flex items-center justify-center shadow-lg">
                  <span className="text-2xl 2xl:text-3xl font-black font-mono text-bg-dark">{step.number}</span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-2xl 2xl:text-3xl font-bold mb-4 gradient-text-lime-gold">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary 2xl:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-muted mb-6">{t.process.readyToStart}</p>
          <Link
            href="/get-concept"
            className="inline-block px-8 py-4 2xl:px-10 2xl:py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base 2xl:text-lg hover:glow-lime hover:scale-105 transition-all duration-300 shine-button"
          >
            {t.process.getConcept}
          </Link>
        </div>
      </div>
    </section>
  )
}
