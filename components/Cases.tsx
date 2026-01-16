'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import { getAssetPath } from '@/lib/utils'

export default function Cases() {
  const { t } = useLanguage()

  return (
    <section id="cases" className="py-16 md:py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-gold/5 to-bg-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4">
            {t.cases.title} <span className="gradient-text">{t.cases.titleHighlight}</span>
          </h2>
          <p className="text-base md:text-xl text-text-secondary">
            {t.cases.subtitle}
          </p>
        </div>

        {/* Cases Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.portfolio.items.map((item) => (
            <div
              key={item.id}
              className="group glass rounded-2xl overflow-hidden hover:border-accent-purple transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <Image
                  src={getAssetPath(`/portfolio/${item.id}/cover.jpg`)}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Client Badge */}
                <div className="absolute top-3 right-3 bg-bg-dark/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-accent-purple/50">
                  <div className="text-xs font-bold text-accent-purple">
                    {item.client}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent-purple transition-colors uppercase">
                  {item.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-accent-purple/20 rounded-full text-xs text-accent-purple">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href="/portfolio"
                  className="inline-block w-full py-2.5 border border-accent-purple rounded-lg text-accent-purple font-bold uppercase text-sm hover:bg-accent-purple/20 transition-all duration-300 text-center"
                >
                  {t.cases.moreBtn} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            href="/portfolio"
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg text-text-primary font-bold uppercase text-sm md:text-base hover:scale-105 hover:glow-purple transition-all duration-300"
          >
            {t.cases.viewPortfolio} →
          </Link>
        </div>
      </div>
    </section>
  )
}
