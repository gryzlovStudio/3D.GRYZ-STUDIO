import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Получить концепт',
  description: 'Получите бесплатный 3D концепт для вашего проекта. Заполните форму и мы создадим визуализацию вашей идеи.',
  openGraph: {
    title: 'Получить концепт | 3D.GRYZ',
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
