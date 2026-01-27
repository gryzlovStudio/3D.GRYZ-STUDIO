export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '3D.GRYZ',
    alternateName: '3D GRYZ Studio',
    url: 'https://3dgryz.ru',
    logo: 'https://3dgryz.ru/logo.png',
    description: 'AI-ускоренное 3D производство для брендов и бизнеса. Создаём 3D маскоты, персонажи, визуализации и анимации.',
    foundingDate: '2024',
    sameAs: [
      'https://t.me/gryz3d',
      'https://t.me/ddd_gryz',
      'https://www.instagram.com/3d.gryz/',
      'https://www.behance.net/gryzlovstudio',
    ],
    knowsAbout: [
      '3D моделирование',
      'AI в 3D производстве',
      '3D маскоты для брендов',
      '3D персонажи',
      '3D анимация',
      'Продуктовая 3D визуализация',
      'AI-генерация концептов',
      'Игровые 3D ассеты',
      'Motion design',
      'Визуальный контент для маркетинга',
    ],
    email: 'gryzlovstudio@gmail.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'gryzlovstudio@gmail.com',
      url: 'https://3dgryz.ru/get-concept',
      availableLanguage: ['Russian', 'English'],
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 15,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 55.7558,
        longitude: 37.6173,
      },
      geoRadius: '10000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги 3D.GRYZ',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: '3D-персонажи и маскоты',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '3D-персонажи и маскоты',
                description: 'Разработка уникальных 3D персонажей и маскотов для брендов. От концепта и истории до финальной модели с ригом и анимациями.',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Рекламные видео и анимации',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Рекламные видео и анимации',
                description: '3D анимированные видео для маркетинга и рекламы. Explainer videos, product animations, рекламные ролики для ТВ и digital.',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Контент для маркетинга',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Контент для маркетинга',
                description: 'Engaging контент для социальных сетей: стикеры, AR-маски, анимированные посты, 3D-баннеры и креативы.',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Игровые ассеты и метавселенные',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Игровые ассеты и метавселенные',
                description: 'Персонажи, окружение, props для игр и метавселенных. Оптимизированные модели для Unity и Unreal Engine.',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Продуктовая визуализация',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Продуктовая визуализация',
                description: 'Фотореалистичные рендеры продуктов, 360° обзоры, визуализация для e-commerce и маркетплейсов.',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: '3D-моделирование для печати',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '3D-моделирование для печати',
                description: '3D-модели для печати: прототипы продуктов, инженерные детали. Готовые файлы с учётом технических требований.',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'AI-ускоренное производство',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI-ускоренное производство',
                description: 'Генерация сотен вариантов концептов, текстур, фонов с помощью AI. От идеи до финального результата за часы, а не недели.',
              },
            },
          ],
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '3D.GRYZ',
    url: 'https://3dgryz.ru',
    description: 'AI-ускоренное 3D производство для брендов и бизнеса',
    inLanguage: ['ru', 'en'],
    publisher: {
      '@type': 'Organization',
      name: '3D.GRYZ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://3dgryz.ru/logo.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '3D.GRYZ',
    image: 'https://3dgryz.ru/og-image.jpg',
    url: 'https://3dgryz.ru',
    description: 'AI-ускоренное 3D производство для брендов и бизнеса. Создаём 3D маскоты, персонажи, визуализации и анимации.',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.7558,
      longitude: 37.6173,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    serviceType: ['3D Modeling', '3D Animation', '3D Visualization', 'Character Design', 'Mascot Design'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// WebPage with SpeakableSpecification — помогает AI-ассистентам и Яндекс Нейро
// определить ключевой контент на странице
export function WebPageSpeakableJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '3D.GRYZ — AI-ускоренное 3D производство',
    url: 'https://3dgryz.ru',
    description: '3D.GRYZ — студия AI-ускоренного 3D производства в Москве. Создаём 3D маскоты, персонажи, визуализации и анимации для брендов.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        'h1',
        'h2',
        '[data-speakable]',
        'meta[name="description"]',
      ],
    },
    isPartOf: {
      '@type': 'WebSite',
      name: '3D.GRYZ',
      url: 'https://3dgryz.ru',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// FAQ Page JSON-LD
export function FAQPageJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Breadcrumb JSON-LD
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Service JSON-LD
export function ServiceJsonLd({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}: {
  name: string
  description: string
  provider?: string
  areaServed?: string
  serviceType?: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || '3D.GRYZ',
      url: 'https://3dgryz.ru',
    },
    areaServed: areaServed || 'RU',
    serviceType: serviceType || name,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// HowTo JSON-LD
export function HowToJsonLd({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// VideoObject JSON-LD
export function VideoObjectJsonLd({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
}: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl?: string
  embedUrl?: string
}) {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
  }
  if (contentUrl) jsonLd.contentUrl = contentUrl
  if (embedUrl) jsonLd.embedUrl = embedUrl

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// CreativeWork JSON-LD
export function CreativeWorkJsonLd({
  name,
  description,
  image,
  author,
  dateCreated,
  url,
}: {
  name: string
  description: string
  image?: string
  author?: string
  dateCreated?: string
  url?: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    image: image || undefined,
    author: {
      '@type': 'Organization',
      name: author || '3D.GRYZ',
    },
    dateCreated: dateCreated || undefined,
    url: url || undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
