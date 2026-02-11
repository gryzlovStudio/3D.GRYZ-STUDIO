import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог о 3D визуализации, ценах и AI-трендах',
  description: 'Гайды по ценам на 3D визуализацию, сравнения рендер vs фото, AI-инструменты для маркетплейсов. Практические статьи от практикующей студии.',
  openGraph: {
    title: 'Блог о 3D визуализации, ценах и AI-трендах | 3D.GRYZ',
    description: 'Гайды по ценам на 3D визуализацию, сравнения рендер vs фото, AI-инструменты для маркетплейсов.',
  },
  alternates: {
    canonical: 'https://3dgryz.ru/blog/',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
