'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import { getAssetPath } from '@/lib/utils'

export default function Cases() {
  const { t } = useLanguage()
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth / 2
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setTimeout(checkScrollButtons, 300)
    }
  }

  return (
    <section id="cases" className="py-16 md:py-24 2xl:py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-gold/5 to-bg-dark"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black uppercase mb-4">
            {t.cases.title} <span className="gradient-text">{t.cases.titleHighlight}</span>
          </h2>
          <p className="text-base md:text-xl 2xl:text-2xl text-text-secondary">
            {t.cases.subtitle}
          </p>
        </div>

        {/* Desktop: Horizontal Slider with Arrows */}
        <div className="hidden md:block relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-bg-dark/90 border border-white/20 flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? 'opacity-100 hover:border-accent-purple hover:bg-accent-purple/20'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-bg-dark/90 border border-white/20 flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? 'opacity-100 hover:border-accent-purple hover:bg-accent-purple/20'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            onScroll={checkScrollButtons}
            className="flex gap-8 2xl:gap-10 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {t.portfolio.items.map((item) => (
              <div
                key={item.id}
                className="group glass rounded-2xl overflow-hidden hover:border-accent-purple transition-all duration-300 hover:-translate-y-2 flex-shrink-0"
                style={{ width: 'calc(50% - 16px)' }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={getAssetPath(`/portfolio/${item.id}/cover.jpg`)}
                    alt={item.title}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                      item.id === 'bars' ? 'object-top' : ''
                    }`}
                  />
                  {/* Client Badge */}
                  <div className="absolute top-3 right-3 bg-bg-dark/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-accent-purple/50">
                    <div className="text-xs font-bold text-accent-purple">
                      {item.client}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 2xl:p-8">
                  <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold mb-3 group-hover:text-accent-purple transition-colors uppercase">
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
                    className="inline-block w-full py-2.5 2xl:py-3 border border-accent-purple rounded-lg text-accent-purple font-bold uppercase text-sm hover:bg-accent-purple/20 transition-all duration-300 text-center"
                  >
                    {t.cases.moreBtn} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {t.portfolio.items.map((item) => (
            <div
              key={item.id}
              className="group glass rounded-2xl overflow-hidden hover:border-accent-purple transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={getAssetPath(`/portfolio/${item.id}/cover.jpg`)}
                  alt={item.title}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                    item.id === 'bars' ? 'object-top' : ''
                  }`}
                />
                {/* Client Badge */}
                <div className="absolute top-3 right-3 bg-bg-dark/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-accent-purple/50">
                  <div className="text-xs font-bold text-accent-purple">
                    {item.client}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-purple transition-colors uppercase">
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
            className="inline-block px-6 py-3 md:px-8 md:py-4 2xl:px-10 2xl:py-5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg text-text-primary font-bold uppercase text-sm md:text-base 2xl:text-lg hover:scale-105 hover:glow-purple transition-all duration-300"
          >
            {t.cases.viewPortfolio} →
          </Link>
        </div>
      </div>
    </section>
  )
}
