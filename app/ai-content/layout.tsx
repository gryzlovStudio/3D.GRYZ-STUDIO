import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-ускоренное производство',
  description: 'Как мы используем AI для ускорения 3D производства. Сокращаем сроки без потери качества. Современные технологии на службе вашего бренда.',
  openGraph: {
    title: 'AI-ускоренное производство | 3D.GRYZ',
    description: 'Как мы используем AI для ускорения 3D производства. Сокращаем сроки без потери качества.',
  },
}

export default function AIContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
