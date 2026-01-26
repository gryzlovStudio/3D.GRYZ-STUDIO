import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О студии 3D.GRYZ — AI-ускоренное 3D производство',
  description: '3D.GRYZ — команда из 10-15 профессионалов: 3D-художники, AI-инженеры и аниматоры. 150+ проектов для крупных брендов. Используем Blender, Maya, ZBrush, ComfyUI и другие AI-инструменты.',
  alternates: {
    canonical: 'https://3dgryz.ru/about',
  },
  openGraph: {
    title: 'О студии 3D.GRYZ — AI-ускоренное 3D производство',
    description: '3D.GRYZ — команда профессионалов в области 3D визуализации и анимации. Используем AI для ускорения производства качественного контента.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
