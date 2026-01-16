import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О студии',
  description: '3D.GRYZ — команда профессионалов в области 3D визуализации и анимации. Используем AI для ускорения производства качественного контента для брендов.',
  openGraph: {
    title: 'О студии | 3D.GRYZ',
    description: '3D.GRYZ — команда профессионалов в области 3D визуализации и анимации. Используем AI для ускорения производства качественного контента.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
