import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Портфолио',
  description: 'Портфолио работ 3D.GRYZ: 3D маскоты, персонажи, визуализации и анимации для брендов. Реальные кейсы с результатами.',
  openGraph: {
    title: 'Портфолио | 3D.GRYZ',
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
