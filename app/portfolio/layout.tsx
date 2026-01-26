import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Портфолио 3D работ: маскоты, персонажи, анимации',
  description: 'Портфолио студии 3D.GRYZ: 3D маскоты, персонажи, визуализации и анимации для брендов. Реальные кейсы с результатами и стоимостью. Смотрите примеры наших работ.',
  alternates: {
    canonical: 'https://3dgryz.ru/portfolio',
  },
  openGraph: {
    title: 'Портфолио 3D работ: маскоты, персонажи, анимации | 3D.GRYZ',
    description: 'Портфолио работ 3D.GRYZ: 3D маскоты, персонажи, визуализации и анимации для брендов.',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
