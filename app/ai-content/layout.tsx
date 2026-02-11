import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI в 3D: концепт за 1 час вместо недели',
  description: 'Как нейросети ускоряют 3D-производство в 5-10 раз. Генерация концептов, текстур, анимаций. Экономия бюджета до 60%. Смотрите реальные примеры.',
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
    title: 'AI в 3D: концепт за 1 час вместо недели | 3D.GRYZ',
    description: 'Как нейросети ускоряют 3D-производство в 5-10 раз. Генерация концептов, текстур, анимаций. Экономия бюджета до 60%.',
  },
}

export default function AIContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
