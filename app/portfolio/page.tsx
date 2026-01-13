'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/i18n'

const galleryImages = [
  { src: '/portfolio/bulldog/gallery-1.jpg', alt: 'Bulldog - main view' },
  { src: '/portfolio/bulldog/gallery-2.jpg', alt: 'Bulldog - classic look' },
  { src: '/portfolio/bulldog/gallery-3.jpg', alt: 'Bulldog - sporty look' },
  { src: '/portfolio/bulldog/gallery-4.jpg', alt: 'Bulldog - concept development' },
  { src: '/portfolio/bulldog/gallery-5.jpg', alt: 'Bulldog - banner' },
  { src: '/portfolio/bulldog/gallery-7.jpg', alt: 'Bulldog - all angles' },
]

export default function PortfolioPage() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const closeModal = () => setSelectedProject(null)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 0, 239, 0.1) 0%, rgba(10, 10, 15, 1) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black uppercase mb-6">
            {t.portfolio.hero.title} <span className="gradient-text">{t.portfolio.hero.titleHighlight}</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t.portfolio.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {t.portfolio.items.map((item, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={item.id}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center glass rounded-2xl p-8 hover:border-accent-purple transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Image Container */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden relative bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border border-white/10">
                    <Image
                      src="/portfolio/bulldog/cover.jpg"
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full md:w-2/3">
                  <div className="text-sm text-accent-purple uppercase mb-2">
                    {item.client}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
                    {item.title}
                  </h2>
                  <p className="text-text-secondary mb-4">{item.subtitle}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-accent-purple/20 rounded-full text-xs text-accent-purple uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-text-muted min-w-[100px]">{t.portfolio.labels.timeline}</span>
                      <span className="text-text-primary font-medium">{item.timeline}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-muted min-w-[100px]">{t.portfolio.labels.results}</span>
                      <span className="text-accent-purple font-medium">{item.results}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-muted min-w-[100px]">{t.portfolio.labels.cost}</span>
                      <span className="text-accent-lime font-bold text-xl font-mono">{item.cost}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(index)}
                    className="px-6 py-3 border border-accent-purple rounded-lg text-accent-purple font-bold uppercase text-sm hover:bg-accent-purple/20 transition-smooth inline-block"
                  >
                    {t.portfolio.labels.moreBtn}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(240, 197, 0, 0.1) 0%, rgba(78, 0, 239, 0.1) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-6">
            {t.portfolio.cta.title} <span className="gradient-text-gold-purple">{t.portfolio.cta.titleHighlight}</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            {t.portfolio.cta.subtitle}
          </p>

          <div className="flex justify-center">
            <a href="/get-concept" className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase hover:glow-lime hover:scale-105 transition-all duration-300 shine-button">
              {t.portfolio.cta.button}
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-bg-dark/90 backdrop-blur-sm"></div>

          {/* Modal Content */}
          <div
            className="relative z-10 w-full max-w-5xl mx-4 my-8 bg-bg-darker border border-white/10 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-bg-dark/80 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-accent-purple transition-all"
            >
              ✕
            </button>

            {/* Header */}
            <div className="relative p-8 pb-0">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Image */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden relative border border-white/10">
                    <Image
                      src="/portfolio/bulldog/cover.jpg"
                      alt={t.portfolio.items[selectedProject].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="text-accent-purple uppercase text-sm font-bold mb-2">
                    {t.portfolio.items[selectedProject].client}
                  </div>
                  <h2 className="text-4xl font-black uppercase mb-2">
                    <span className="gradient-text">{t.portfolio.items[selectedProject].title}</span>
                  </h2>
                  <p className="text-text-secondary mb-4">{t.portfolio.items[selectedProject].subtitle}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {t.portfolio.items[selectedProject].tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-accent-purple/20 rounded-full text-xs text-accent-purple uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4">
                      <div className="text-2xl font-black font-mono text-accent-lime mb-1">{t.portfolio.items[selectedProject].timeline}</div>
                      <div className="text-xs text-text-muted uppercase">{t.portfolio.labels.timelineLabel}</div>
                    </div>
                    <div className="glass rounded-xl p-4">
                      <div className="text-2xl font-black font-mono text-accent-lime mb-1">{t.portfolio.items[selectedProject].cost}</div>
                      <div className="text-xs text-text-muted uppercase">{t.portfolio.labels.costLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-8">
              <h3 className="text-2xl font-bold uppercase mb-4">{t.portfolio.labels.aboutProject}</h3>
              <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                {t.portfolio.items[selectedProject].fullDescription}
              </div>
            </div>

            {/* What was done */}
            <div className="p-8 pt-0">
              <h3 className="text-2xl font-bold uppercase mb-6">{t.portfolio.labels.whatWasDone}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.portfolio.items[selectedProject].whatWasDone.map((item, i) => (
                  <div key={i} className="glass rounded-xl p-4">
                    <h4 className="font-bold text-accent-lime mb-2">{item.title}</h4>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="p-8 pt-0">
              <h3 className="text-2xl font-bold uppercase mb-6">{t.portfolio.labels.gallery}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((image, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden relative border border-white/10 hover:border-accent-purple/50 transition-all">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 pt-0 text-center">
              <a
                href="/get-concept"
                className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase hover:glow-lime hover:scale-105 transition-all duration-300 shine-button inline-block"
              >
                {t.portfolio.labels.orderSimilar}
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
