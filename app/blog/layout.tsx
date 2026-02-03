import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог о 3D-графике, маскотах и AI-визуализации | 3D.GRYZ',
  description: 'Статьи о создании 3D маскотов, визуализации для маркетплейсов, AI в 3D-производстве. Советы, кейсы, цены. Читайте блог студии 3D.GRYZ.',
  openGraph: {
    title: 'Блог о 3D-графике, маскотах и AI-визуализации | 3D.GRYZ',
    description: 'Статьи о создании 3D маскотов, визуализации для маркетплейсов, AI в 3D-производстве. Советы, кейсы, цены.',
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
