import type { Metadata } from 'next'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'

type Props = {
  params: Promise<{ slug: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Статья не найдена',
      description: 'Запрашиваемая статья не существует.',
    }
  }

  return {
    title: post.title.ru,
    description: post.excerpt.ru,
    openGraph: {
      title: `${post.title.ru} | 3D.GRYZ`,
      description: post.excerpt.ru,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      images: post.coverImage ? [
        {
          url: `https://3dgryz.ru${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title.ru,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.ru,
      description: post.excerpt.ru,
      images: post.coverImage ? [`https://3dgryz.ru${post.coverImage}`] : [],
    },
    alternates: {
      canonical: `https://3dgryz.ru/blog/${slug}/`,
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return children
}
