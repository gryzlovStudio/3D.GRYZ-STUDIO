import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Бесплатный 3D концепт за 1 час — заказать',
  description: 'Получите бесплатный 3D концепт для вашего проекта за 1 час. Заполните форму — наш AI-специалист создаст 3 варианта визуализации вашей идеи. Без обязательств.',
  alternates: {
    canonical: 'https://3dgryz.ru/get-concept',
  },
  openGraph: {
    title: 'Бесплатный 3D концепт за 1 час | 3D.GRYZ',
    description: 'Получите бесплатный 3D концепт для вашего проекта. Заполните форму и мы создадим визуализацию вашей идеи.',
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
