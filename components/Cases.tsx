'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import { getAssetPath } from '@/lib/utils'

export default function Cases() {
  const { t } = useLanguage()

  return (
    <section id="cases" className="py-16 md:py-24 xl:py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-gold/5 to-bg-dark"></div>

      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black uppercase mb-4">
            {t.cases.title} <span className="gradient-text">{t.cases.titleHighlight}</span>
          </h2>
          <p className="text-base md:text-xl xl:text-2xl 2xl:text-3xl text-text-secondary">
            {t.cases.subtitle}
          </p>
        </div>

        {/* Cases Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-10 2xl:gap-12">
          {t.portfolio.items.map((item) => (
            <div
              key={item.id}
              className="group glass rounded-2xl overflow-hidden hover:border-accent-purple transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={getAssetPath(`/portfolio/${item.id}/cover.jpg`)}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Client Badge */}
                <div className="absolute top-3 right-3 xl:top-4 xl:right-4 bg-bg-dark/90 backdrop-blur-sm px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg border border-accent-purple/50">
                  <div className="text-xs xl:text-sm font-bold text-accent-purple">
                    {item.client}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 xl:p-8 2xl:p-10">
                <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-3 xl:mb-4 group-hover:text-accent-purple transition-colors uppercase">
                  {item.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 xl:gap-3 mb-4 xl:mb-6">
                  {item.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2 py-1 xl:px-3 xl:py-1.5 bg-accent-purple/20 rounded-full text-xs xl:text-sm text-accent-purple">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href="/portfolio"
                  className="inline-block w-full py-2.5 xl:py-3 2xl:py-4 border border-accent-purple rounded-lg text-accent-purple font-bold uppercase text-sm xl:text-base hover:bg-accent-purple/20 transition-all duration-300 text-center"
                >
                  {t.cases.moreBtn} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-10 md:mt-12 xl:mt-16">
          <Link
            href="/portfolio"
            className="inline-block px-6 py-3 md:px-8 md:py-4 xl:px-10 xl:py-5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg text-text-primary font-bold uppercase text-sm md:text-base xl:text-lg hover:scale-105 hover:glow-purple transition-all duration-300"
          >
            {t.cases.viewPortfolio} →
          </Link>
        </div>
      </div>
    </section>
  )
}
