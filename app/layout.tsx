import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import './globals.css'
import { Providers } from '@/components/Providers'
import { OrganizationJsonLd, WebSiteJsonLd, LocalBusinessJsonLd } from '@/components/JsonLd'
import { YandexMetrika } from '@/components/YandexMetrika'
import { CookieBanner } from '@/components/CookieBanner'

const siteUrl = 'https://3dgryz.ru'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0F',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '3D.GRYZ - Превращаем идеи в высокодоходный визуальный контент',
    template: '%s | 3D.GRYZ',
  },
  description: '3D.GRYZ — студия AI-ускоренного 3D производства в Москве. Создаём 3D маскоты, персонажи, визуализации и анимации для брендов. Концепт за час, проект за дни. В среднем клиенты увеличивают вовлеченность на +240%.',
  keywords: [
    '3D визуализация',
    '3D моделирование',
    '3D персонаж',
    '3D маскот',
    '3D анимация',
    '3D дизайн',
    '3D контент',
    'визуальный контент',
    'брендинг',
    'маскот для бренда',
    '3D студия',
    '3D рендер',
    'CGI',
    '3D для бизнеса',
    'AI 3D',
    'заказать 3D маскот для бренда',
    'создание анимации с помощью нейросетей',
    'студия 3D анимации AI Москва',
    '3D визуализация продуктов для маркетплейсов',
    'создать 3D персонажа на заказ',
    'AI ускоренное 3D производство',
    '3D контент для соцсетей',
    'нейросети для 3D моделирования',
    'сколько стоит 3D визуализация',
    '3D маскот цена',
  ],
  authors: [{ name: '3D.GRYZ Studio' }],
  creator: '3D.GRYZ',
  publisher: '3D.GRYZ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'ru': siteUrl,
      'en': `${siteUrl}/en`,
    },
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: 'en_US',
    url: siteUrl,
    siteName: '3D.GRYZ',
    title: '3D.GRYZ - Превращаем идеи в высокодоходный визуальный контент',
    description: 'AI-ускоренное 3D производство для брендов и бизнеса. Создаём 3D маскоты, персонажи, визуализации и анимации.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '3D.GRYZ - AI-ускоренное 3D производство',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D.GRYZ - Превращаем идеи в высокодоходный визуальный контент',
    description: 'AI-ускоренное 3D производство для брендов и бизнеса. Создаём 3D маскоты, персонажи, визуализации и анимации.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'KI-bSBVCrgtx7QJ2YfFRHq7iyowFKnSoTslNnHUVSoc',
    yandex: '6b71a9e7e8090ea6',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-120.png', sizes: '120x120', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'yandex-tableau-widget', url: '/icon-120.png' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet" />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body>
        <Suspense fallback={null}>
          <YandexMetrika />
        </Suspense>
        <Providers>
          {children}
          <CookieBanner />
        </Providers>
        <noscript>
          <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', color: '#fff', backgroundColor: '#0A0A0F' }}>
            <h1>3D.GRYZ — AI-ускоренное 3D производство для брендов</h1>
            <p>3D.GRYZ — это студия 3D-графики нового поколения из Москвы. Мы создаём 3D маскоты, персонажи, анимации, продуктовые визуализации и рекламные видео для брендов и бизнеса. Используем искусственный интеллект для ускорения производства в 5-10 раз без потери качества.</p>
            <h2>Наши услуги:</h2>
            <ul>
              <li>3D-персонажи и маскоты для брендов — разработка уникальных персонажей от концепта до финальной модели</li>
              <li>Рекламные видео и анимации — 3D анимированные ролики для маркетинга, ТВ и digital</li>
              <li>Контент для маркетинга — стикеры, AR-маски, анимированные посты для соцсетей</li>
              <li>Игровые ассеты и метавселенные — персонажи, окружение и props для Unity/Unreal Engine</li>
              <li>Продуктовая визуализация — фотореалистичные рендеры, 360° обзоры для e-commerce</li>
              <li>3D-моделирование для печати — прототипы и инженерные детали</li>
              <li>AI-ускоренное производство — генерация концептов, текстур, видео с помощью нейросетей</li>
            </ul>
            <h2>Почему 3D.GRYZ?</h2>
            <p>150+ успешных проектов. Команда из 10-15 специалистов: 3D-художники, AI-инженеры, аниматоры. Бесплатный концепт за 1 час. Сроки в 5-10 раз быстрее традиционного производства.</p>
            <p>Контакт: gryzlovstudio@gmail.com | Telegram: @ddd_gryz</p>
          </div>
        </noscript>
      </body>
    </html>
  )
}
