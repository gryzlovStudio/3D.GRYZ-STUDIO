import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3D услуги: маскоты, анимация, визуализация продуктов',
  description: 'Полный спектр 3D услуг: 3D маскоты, персонажи, визуализация продуктов, анимация, интерьеры. AI-ускоренное производство для быстрых результатов.',
  openGraph: {
    title: '3D услуги: маскоты, анимация, визуализация | 3D.GRYZ',
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
