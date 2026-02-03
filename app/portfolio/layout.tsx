import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Портфолио 3D работ: маскоты для брендов + цены | 3D.GRYZ',
  description: 'Примеры 3D работ студии 3D.GRYZ: маскоты для Wildberries, персонажи для игр, рекламная анимация. Кейсы с ценами от 150 000 ₽. Смотрите портфолио.',
  alternates: {
    canonical: 'https://3dgryz.ru/portfolio',
  },
  openGraph: {
    title: 'Портфолио 3D работ: маскоты для брендов + цены | 3D.GRYZ',
    description: 'Примеры 3D работ студии 3D.GRYZ: маскоты для брендов, персонажи для игр, рекламная анимация. Кейсы с ценами.',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
