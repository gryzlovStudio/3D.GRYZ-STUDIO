import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'
import { OrganizationJsonLd, WebSiteJsonLd, LocalBusinessJsonLd } from '@/components/JsonLd'

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
  description: 'AI-ускоренное 3D производство для брендов и бизнеса. Создаём 3D маскоты, персонажи, визуализации и анимации. В среднем наши клиенты увеличивают вовлеченность на +240%',
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
