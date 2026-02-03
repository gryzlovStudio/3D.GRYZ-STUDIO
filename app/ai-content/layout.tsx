import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI в 3D производстве: сроки в 5 раз быстрее | 3D.GRYZ',
  description: 'Как AI сокращает сроки 3D производства в 5-10 раз. Генерация концептов, текстур, анимаций с нейросетями. Концепт за 1 час вместо недели. Узнайте больше.',
  keywords: [
    'нейросети в 3D',
    'AI 3D производство',
    'создание анимации с помощью нейросетей',
    'AI генерация 3D',
    'ускорение 3D производства',
    'нейросети для визуализации',
    'AI текстуры',
    'автоматизация 3D',
  ],
  alternates: {
    canonical: 'https://3dgryz.ru/ai-content',
  },
  openGraph: {
    title: 'AI в 3D производстве: сроки в 5 раз быстрее | 3D.GRYZ',
    description: 'Как AI сокращает сроки 3D производства в 5-10 раз. Генерация концептов, текстур, анимаций с нейросетями. Концепт за 1 час.',
  },
}

export default function AIContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
