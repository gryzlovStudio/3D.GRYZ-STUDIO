import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Услуги',
  description: 'Полный спектр 3D услуг: 3D маскоты, персонажи, визуализация продуктов, анимация, интерьеры. AI-ускоренное производство для быстрых результатов.',
  openGraph: {
    title: 'Услуги | 3D.GRYZ',
    description: 'Полный спектр 3D услуг: 3D маскоты, персонажи, визуализация продуктов, анимация, интерьеры.',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
