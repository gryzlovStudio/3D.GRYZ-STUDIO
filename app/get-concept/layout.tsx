import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Бесплатный 3D концепт за 1 час – маскот или визуализация',
  description: 'Закажите бесплатный 3D концепт: маскот, персонаж или визуализация. AI создаст 3 варианта за 1 час. Заполните форму — без оплаты и обязательств.',
  alternates: {
    canonical: 'https://3dgryz.ru/get-concept',
  },
  openGraph: {
    title: 'Бесплатный 3D концепт за 1 час – маскот или визуализация | 3D.GRYZ',
    description: 'Закажите бесплатный 3D концепт: маскот, персонаж или визуализация. AI создаст 3 варианта за 1 час. Без оплаты и обязательств.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GetConceptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
