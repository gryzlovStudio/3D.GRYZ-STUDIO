'use client'

import { useLanguage } from '@/lib/i18n'

export default function WhyUs() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-darker/50 to-bg-dark"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display font-black uppercase mb-4">
            {t.whyUs.title} <span className="gradient-text">{t.whyUs.titleHighlight}</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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

        {/* About Us CTA */}
        <div className="text-center mt-12">
          <a
            href="/about"
            className="inline-block px-8 py-4 border border-accent-lime rounded-lg text-text-primary font-bold uppercase text-base hover:bg-accent-lime/20 hover:scale-105 hover:glow-lime transition-all duration-300"
          >
            {t.whyUs.aboutBtn}
          </a>
        </div>
      </div>
    </section>
  )
}
