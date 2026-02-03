import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Услуги 3D студии: маскоты, анимация, визуализация | Цены',
  description: 'Создание 3D маскотов для брендов, рекламная анимация, визуализация для Wildberries и Ozon. AI-ускорение сокращает сроки в 5 раз. Цены от 150 000 ₽.',
  keywords: [
    'заказать 3D маскот',
    '3D персонаж для бренда',
    'рекламная 3D анимация',
    'продуктовая визуализация',
    '3D для маркетплейсов',
    'игровые 3D ассеты',
    '3D моделирование для печати',
    'AI 3D производство',
  ],
  alternates: {
    canonical: 'https://3dgryz.ru/services',
  },
  openGraph: {
    title: 'Услуги 3D студии: маскоты, анимация, визуализация | Цены',
    description: 'Создание 3D маскотов для брендов, рекламная анимация, визуализация для Wildberries и Ozon. AI-ускорение сокращает сроки в 5 раз.',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
