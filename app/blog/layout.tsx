import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог',
  description: 'Блог студии 3D.GRYZ: статьи о 3D-графике, маскотах, визуализации, AI в 3D производстве и нашем рабочем процессе.',
  openGraph: {
    title: 'Блог | 3D.GRYZ',
    description: 'Статьи о 3D-графике, маскотах, визуализации и AI в 3D производстве.',
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
