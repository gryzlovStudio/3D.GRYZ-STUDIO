export interface BlogPost {
  slug: string
  title: {
    ru: string
    en: string
  }
  excerpt: {
    ru: string
    en: string
  }
  content: {
    ru: string
    en: string
  }
  author: string
  publishedAt: string
  updatedAt?: string
  coverImage: string
  tags: string[]
  readingTime: number
}

export const blogPosts: BlogPost[] = [
  {
    slug: '3d-mascots-for-brands',
    title: {
      ru: '3D-маскоты для брендов: как создать запоминающийся персонаж',
      en: '3D Mascots for Brands: How to Create a Memorable Character',
    },
    excerpt: {
      ru: 'Разбираем ключевые принципы создания эффективных 3D-маскотов, которые помогают брендам выделиться и установить эмоциональную связь с аудиторией.',
      en: 'We break down the key principles of creating effective 3D mascots that help brands stand out and establish an emotional connection with their audience.',
    },
    content: {
      ru: `
## Зачем бренду нужен 3D-маскот?

3D-маскот — это не просто красивая картинка. Это мощный инструмент маркетинга, который:

- **Повышает узнаваемость бренда** — уникальный персонаж запоминается лучше, чем логотип
- **Создаёт эмоциональную связь** — люди легче взаимодействуют с персонажами, чем с абстрактными брендами
- **Универсален в использовании** — можно применять в рекламе, соцсетях, на сайте, в мерче

## Ключевые принципы создания маскота

### 1. Простота силуэта

Хороший маскот узнаваем даже в виде силуэта. Подумайте о Микки Маусе или Пикачу — их формы уникальны и мгновенно считываются.

### 2. Отражение ценностей бренда

Маскот должен транслировать характер и ценности компании. Для финтех-стартапа подойдёт умный и надёжный персонаж, для детского бренда — весёлый и дружелюбный.

### 3. Масштабируемость

Персонаж должен хорошо смотреться как на билборде, так и в виде маленькой иконки в приложении.

## Процесс создания в 3D.GRYZ

Мы используем AI-ускоренный пайплайн, который позволяет:

1. Быстро генерировать концепты на основе брифа
2. Итерировать дизайн в реальном времени с клиентом
3. Создавать готовую 3D-модель за 3-5 дней

Готовы обсудить маскота для вашего бренда? [Оставьте заявку](/get-concept) и получите бесплатные концепты.
      `,
      en: `
## Why Does a Brand Need a 3D Mascot?

A 3D mascot is not just a pretty picture. It's a powerful marketing tool that:

- **Increases brand recognition** — a unique character is more memorable than a logo
- **Creates emotional connection** — people interact more easily with characters than with abstract brands
- **Is universally applicable** — can be used in advertising, social media, websites, and merchandise

## Key Principles of Mascot Creation

### 1. Simple Silhouette

A good mascot is recognizable even as a silhouette. Think of Mickey Mouse or Pikachu — their shapes are unique and instantly readable.

### 2. Reflecting Brand Values

The mascot should convey the company's character and values. For a fintech startup, a smart and reliable character works; for a children's brand — fun and friendly.

### 3. Scalability

The character should look good both on a billboard and as a small icon in an app.

## Creation Process at 3D.GRYZ

We use an AI-accelerated pipeline that allows us to:

1. Quickly generate concepts based on the brief
2. Iterate on the design in real-time with the client
3. Create a finished 3D model in 3-5 days

Ready to discuss a mascot for your brand? [Submit a request](/get-concept) and get free concepts.
      `,
    },
    author: '3D.GRYZ',
    publishedAt: '2026-01-17',
    coverImage: '/blog/3d-mascots.jpg',
    tags: ['3D-маскоты', 'брендинг', 'дизайн персонажей'],
    readingTime: 5,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}
