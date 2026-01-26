import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-ускоренное 3D производство — нейросети в 3D',
  description: 'Как нейросети ускоряют создание 3D контента? Студия 3D.GRYZ использует AI для генерации концептов, текстур и анимаций. Сроки в 5-10 раз быстрее, стоимость ниже. Узнайте о возможностях AI в 3D производстве.',
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
    title: 'AI-ускоренное 3D производство | 3D.GRYZ',
    description: 'Как мы используем нейросети для ускорения 3D производства. Концепты за часы, а не недели. Сокращаем сроки в 5-10 раз без потери качества.',
  },
}

export default function AIContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
