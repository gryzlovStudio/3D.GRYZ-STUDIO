'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/i18n'
import { getAllBlogPosts } from '@/lib/blog'
import { getAssetPath } from '@/lib/utils'

export default function BlogPage() {
  const { language } = useLanguage()
  const posts = getAllBlogPosts()

  const t = {
    ru: {
      title: 'Блог',
      titleHighlight: '3D.GRYZ',
      subtitle: 'Статьи о 3D-графике, маскотах, визуализации и нашем рабочем процессе',
      readMore: 'Читать',
      minRead: 'мин чтения',
    },
    en: {
      title: 'Blog',
      titleHighlight: '3D.GRYZ',
      subtitle: 'Articles about 3D graphics, mascots, visualization and our workflow',
      readMore: 'Read',
      minRead: 'min read',
    },
  }

  const content = t[language]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(78, 0, 239, 0.1) 0%, rgba(10, 10, 15, 1) 100%)',
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase mb-6">
            {content.title}{' '}
            <span className="gradient-text-lime-gold">{content.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary">{content.subtitle}</p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="aspect-video relative bg-accent-purple/20">
                  {post.coverImage && (
                    <Image
                      src={getAssetPath(post.coverImage)}
                      alt={post.title[language]}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-text-muted">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>
                      {post.readingTime} {content.minRead}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold uppercase mb-3 group-hover:text-accent-lime transition-colors">
                    {post.title[language]}
                  </h2>
                  <p className="text-sm text-text-secondary line-clamp-3">
                    {post.excerpt[language]}
                  </p>
                  <div className="mt-4 text-accent-lime font-bold uppercase text-sm">
                    {content.readMore} →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">
                {language === 'ru' ? 'Статьи скоро появятся' : 'Articles coming soon'}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
