'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/JsonLd'
import { useLanguage } from '@/lib/i18n'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { getAssetPath } from '@/lib/utils'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function ArticleJsonLd({
  title,
  description,
  author,
  publishedAt,
  updatedAt,
  image,
  url,
}: {
  title: string
  description: string
  author: string
  publishedAt: string
  updatedAt?: string
  image: string
  url: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://3dgryz.ru',
    },
    publisher: {
      '@type': 'Organization',
      name: '3D.GRYZ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://3dgryz.ru/logo.png',
      },
    },
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden transition-colors hover:border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-bold text-base sm:text-lg pr-4">{question}</span>
        <span
          className={`text-accent-lime text-2xl flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 pb-5 text-text-secondary leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const { language } = useLanguage()

  const post = getBlogPost(slug)

  const t = {
    ru: {
      back: '← Назад к блогу',
      minRead: 'мин чтения',
      notFound: 'Статья не найдена',
      notFoundDesc: 'К сожалению, такой статьи не существует.',
      backToHome: 'На главную',
    },
    en: {
      back: '← Back to blog',
      minRead: 'min read',
      notFound: 'Article not found',
      notFoundDesc: 'Sorry, this article does not exist.',
      backToHome: 'Go to home',
    },
  }

  const content = t[language]

  if (!post) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-black uppercase mb-4">{content.notFound}</h1>
            <p className="text-text-secondary mb-8">{content.notFoundDesc}</p>
            <Link
              href="/blog"
              className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase inline-block hover:scale-105 transition-all"
            >
              {content.backToHome}
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const articleUrl = `https://3dgryz.ru/blog/${post.slug}`
  const imageUrl = `https://3dgryz.ru${post.coverImage}`

  return (
    <main className="min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: 'Главная', url: 'https://3dgryz.ru' },
          { name: 'Блог', url: 'https://3dgryz.ru/blog' },
          { name: post.title[language], url: articleUrl },
        ]}
      />
      {post.faqItems && post.faqItems.length > 0 && (
        <FAQPageJsonLd items={post.faqItems} />
      )}
      <ArticleJsonLd
        title={post.title[language]}
        description={post.excerpt[language]}
        author={post.author}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        image={imageUrl}
        url={articleUrl}
      />

      <Header />

      {/* Article */}
      <article
        className="pt-32 pb-16 px-6"
        data-article=""
        data-article-headline={post.title[language]}
        data-article-published-date={post.publishedAt}
        data-article-author={post.author}
      >
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="text-text-muted hover:text-accent-lime transition-colors text-sm mb-8 inline-block"
          >
            {content.back}
          </Link>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4 text-sm text-text-muted">
              <span>{post.publishedAt}</span>
              <span>•</span>
              <span>
                {post.readingTime} {content.minRead}
              </span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              {post.title[language]}
            </h1>
            <p className="text-lg text-text-secondary">{post.excerpt[language]}</p>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="aspect-video relative rounded-2xl overflow-hidden mb-12 bg-accent-purple/20">
              <Image
                src={getAssetPath(post.coverImage)}
                alt={post.title[language]}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="article-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content[language]}
            </ReactMarkdown>
          </div>

          {/* FAQ Section */}
          {post.faqItems && post.faqItems.length > 0 && (
            <section className="mt-16" data-speakable="">
              <h2 className="text-2xl sm:text-3xl font-black uppercase mb-8">
                {language === 'ru' ? 'Вопросы и ответы' : 'Questions & Answers'}
              </h2>
              <div className="space-y-4">
                {post.faqItems.map((item, index) => (
                  <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
              </div>
            </section>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent-purple/20 rounded-full text-sm text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 p-8 glass rounded-2xl text-center">
            <h3 className="text-2xl font-black uppercase mb-4">
              {language === 'ru' ? 'Нужен 3D-контент?' : 'Need 3D content?'}
            </h3>
            <p className="text-text-secondary mb-6">
              {language === 'ru'
                ? 'Оставьте заявку и получите бесплатные концепты за 1 час'
                : 'Submit a request and get free concepts in 1 hour'}
            </p>
            <Link
              href="/get-concept"
              className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase inline-block hover:scale-105 transition-all shine-button"
            >
              {language === 'ru' ? 'Получить концепт' : 'Get concept'}
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
