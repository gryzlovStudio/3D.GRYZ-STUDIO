'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/JsonLd'
import { useLanguage } from '@/lib/i18n'

const services = [
  {
    name: '3D-персонажи и маскоты',
    description: 'Разработка уникальных 3D персонажей и маскотов для брендов. От концепта и истории до финальной модели с ригом и анимациями. Брендовые персонажи, персонажи для игр, анимации и рекламы.',
  },
  {
    name: 'Рекламные видео и анимации',
    description: '3D анимированные видео для маркетинга и рекламы. Explainer videos, product animations, рекламные ролики для ТВ и digital, контент для соцсетей, motion graphics.',
  },
  {
    name: 'Контент для маркетинга',
    description: 'Engaging контент для социальных сетей: короткие видео для Reels/TikTok/Shorts, стикер-паки, AR-маски, анимированные посты, branded content, 3D-баннеры.',
  },
  {
    name: 'Игровые ассеты и метавселенные',
    description: 'Персонажи, окружение, props для игр и метавселенных. Оптимизированные модели для Unity и Unreal Engine с полной документацией. LOD-модели.',
  },
  {
    name: 'Продуктовая визуализация',
    description: 'Фотореалистичные рендеры продуктов, 360° обзоры, визуализация для e-commerce и маркетплейсов. Замена дорогих фотосессий.',
  },
  {
    name: '3D-моделирование для печати',
    description: 'Создание 3D-моделей для печати: прототипы продуктов, инженерные детали. Готовые файлы с учётом технических требований вашего принтера.',
  },
  {
    name: 'AI-ускоренное производство',
    description: 'Генерация сотен вариантов концептов, текстур, фонов с помощью AI. Концепт-арты, текстуры, стиль-трансфер, пакетная обработка, апскейлинг.',
  },
]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: 'Главная', url: 'https://3dgryz.ru' },
          { name: 'Услуги', url: 'https://3dgryz.ru/services' },
        ]}
      />
      {services.map((service) => (
        <ServiceJsonLd
          key={service.name}
          name={service.name}
          description={service.description}
        />
      ))}

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 md:px-6 relative min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 0, 239, 0.1) 0%, rgba(10, 10, 15, 1) 50%, rgba(240, 197, 0, 0.05) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase leading-tight mb-8">
            <span className="gradient-text-lime-gold block text-left">{t.services.hero.word1}</span>
            <span className="gradient-text-lime block text-left pl-[10%] md:pl-[15%]">{t.services.hero.word2}</span>
            <span className="gradient-text-gold block text-right pr-[10%] md:pr-[15%]">{t.services.hero.word3}</span>
            <span className="gradient-text-gold-purple block text-right">{t.services.hero.word4}</span>
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* First 6 services - regular cards */}
            {t.services.items.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-6 md:p-8 hover:border-accent-purple transition-all duration-300"
              >
                {/* Title */}
                <h2 className="text-2xl md:text-4xl font-black uppercase mb-2 group-hover:text-accent-purple transition-colors">
                  {service.title}
                </h2>

                {/* Subtitle */}
                <div className="text-accent-pink uppercase text-sm font-bold mb-4">
                  {service.subtitle}
                </div>

                {/* Description - hidden on mobile */}
                <p className="hidden md:block text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-accent-purple">→</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* 7th service - AI-ускоренное производство - special card */}
            <div className="lg:col-span-2 group glass rounded-2xl p-6 md:p-12 hover:border-accent-lime transition-all duration-300 bg-gradient-to-br from-accent-purple/5 to-accent-lime/5">
              <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-2xl md:text-5xl font-black uppercase mb-3 group-hover:text-accent-lime transition-colors text-center">
                  {t.services.items[6].title}
                </h2>

                {/* Subtitle */}
                <div className="text-accent-lime uppercase text-base font-bold mb-6 text-center">
                  {t.services.items[6].subtitle}
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-8 leading-relaxed text-sm md:text-lg text-center">
                  {t.services.items[6].description}
                </p>

                {/* Button */}
                <div className="text-center">
                  <Link
                    href="/ai-content"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base hover:glow-lime hover:scale-105 transition-all duration-300 shine-button"
                  >
                    {t.services.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-purple/5 to-bg-dark"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 md:mb-16 text-center">
            {t.services.process.title} <span className="gradient-text">{t.services.process.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {t.services.process.steps.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-6xl font-black font-mono text-accent-purple mb-4 opacity-50">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-2xl font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-text-muted text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        items={t.faq.services.items}
        title={t.faq.services.title}
        titleHighlight={t.faq.services.titleHighlight}
      />

      {/* CTA */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            {t.services.cta.title} <span className="gradient-text-gold-purple">{t.services.cta.titleHighlight}</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            {t.services.cta.subtitle}
          </p>

          <Link href="/get-concept" className="px-12 py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-lg hover:glow-lime hover:scale-105 transition-all duration-300 shine-button inline-block">
            {t.services.cta.button}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
