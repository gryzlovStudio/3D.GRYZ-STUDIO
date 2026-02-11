import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Портфолио 3D работ с ценами — кейсы маскотов и анимации',
  description: '7 реальных кейсов с ценами: 3D маскоты для Wildberries, рекламная анимация, игровые персонажи. Смотрите результаты и сравнивайте стоимость.',
  alternates: {
    canonical: 'https://3dgryz.ru/portfolio',
  },
  openGraph: {
    title: 'Портфолио 3D работ с ценами — кейсы маскотов и анимации | 3D.GRYZ',
    description: '7 реальных кейсов с ценами: 3D маскоты для Wildberries, рекламная анимация, игровые персонажи. Смотрите результаты.',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
