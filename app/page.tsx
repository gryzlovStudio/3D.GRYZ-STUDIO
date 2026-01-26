'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import Process from '@/components/Process'
import Cases from '@/components/Cases'
import WhyUs from '@/components/WhyUs'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import FAQ from '@/components/FAQ'
import { BreadcrumbJsonLd, HowToJsonLd, VideoObjectJsonLd } from '@/components/JsonLd'
import { useLanguage } from '@/lib/i18n'

export default function Home() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [minTimeElapsed, setMinTimeElapsed] = useState(false)

  // Minimum loading time (for animation to complete)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true)
    }, 2500) // 2.5 seconds for animation
    return () => clearTimeout(timer)
  }, [])

  // Check if loading is complete
  useEffect(() => {
    if (videoLoaded && minTimeElapsed) {
      setIsLoading(false)
    }
  }, [videoLoaded, minTimeElapsed])

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Главная', url: 'https://3dgryz.ru' },
        ]}
      />
      <HowToJsonLd
        name="Как заказать 3D контент в студии 3D.GRYZ"
        description="Процесс создания 3D контента от брифа до финальных файлов. Бесплатный концепт за 1 час."
        steps={[
          { name: 'Бриф за 15 минут', text: 'Расскажите о задаче, целях и референсах. Быстро и без лишних встреч.' },
          { name: '3 концепта за час', text: 'Наш специалист создает AI-концепты. Вы выбираете лучший вариант.' },
          { name: 'Реализация', text: 'Создаем анимацию, персонажей, визуализации. AI + ручная работа для идеального результата.' },
          { name: 'Передача материалов', text: 'Передаем все исходники в нужных форматах с инструкциями и поддержкой.' },
        ]}
      />
      <VideoObjectJsonLd
        name="3D.GRYZ — Шоурил студии AI-ускоренного 3D производства"
        description="Шоурил студии 3D.GRYZ: 3D маскоты, персонажи, анимации и визуализации для брендов. AI-ускоренное производство."
        thumbnailUrl="https://3dgryz.ru/og-image.jpg"
        uploadDate="2024-01-01"
      />
      <LoadingScreen isLoading={isLoading} />
      <main className="min-h-screen">
        <Header />
        <Hero onVideoLoad={handleVideoLoad} />
        <PainPoints />
        <Process />
        <Cases />
        <WhyUs />

        {/* FAQ Section */}
        <FAQ
          items={t.faq.home.items}
          title={t.faq.home.title}
          titleHighlight={t.faq.home.titleHighlight}
        />

        {/* CTA Section */}
        <section className="py-24 2xl:py-32 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-accent-pink/15 to-accent-purple/10"></div>

          <div className="relative z-10 max-w-4xl 2xl:max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black uppercase mb-6">
              {t.homeCta.title} <span className="gradient-text">{t.homeCta.titleHighlight}</span>
            </h2>
            <p className="text-xl 2xl:text-2xl text-text-secondary mb-12">
              {t.homeCta.subtitle}
            </p>

            <div className="flex justify-center">
              <Link href="/get-concept" className="px-8 py-4 2xl:px-10 2xl:py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base 2xl:text-lg hover:glow-lime hover:scale-105 transition-all duration-300 text-center shine-button">
                {t.homeCta.button}
              </Link>
            </div>

            <div className="hidden sm:flex flex-row justify-center gap-6 text-sm text-text-muted mt-12">
              <a
                href="mailto:gryzlovstudio@gmail.com"
                className="hover:text-accent-lime transition-smooth"
                onClick={() => (window as any).ym?.(106307550, 'reachGoal', 'click_email')}
              >
                gryzlovstudio@gmail.com
              </a>
              <span>|</span>
              <a
                href="https://t.me/ddd_gryz"
                className="hover:text-accent-lime transition-smooth"
                onClick={() => (window as any).ym?.(106307550, 'reachGoal', 'click_telegram')}
              >
                Telegram: @ddd_gryz
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
