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
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://3dgryz.ru/get-concept',
      availableLanguage: ['Russian', 'English'],
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
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '3D Маскоты и персонажи',
          description: 'Создание уникальных 3D персонажей и маскотов для брендов',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '3D Визуализация',
          description: 'Высококачественная 3D визуализация продуктов и интерьеров',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '3D Анимация',
          description: 'Анимация персонажей и продуктовая анимация',
        },
      },
    ],
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
