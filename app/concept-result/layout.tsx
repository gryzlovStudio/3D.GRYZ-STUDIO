import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ваш концепт готов',
  description: 'Результат генерации 3D концепта для вашего проекта.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ConceptResultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
