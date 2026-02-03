import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О студии 3D.GRYZ – AI-ускоренное 3D производство в Москве',
  description: 'Команда 3D-художников и AI-инженеров в Москве. 150+ проектов для крупных брендов. Blender, Maya, ZBrush, ComfyUI. Сокращаем сроки в 5-10 раз с AI.',
  alternates: {
    canonical: 'https://3dgryz.ru/about',
  },
  openGraph: {
    title: 'О студии 3D.GRYZ – AI-ускоренное 3D производство в Москве',
    description: 'Команда 3D-художников и AI-инженеров в Москве. 150+ проектов для крупных брендов. Сокращаем сроки в 5-10 раз с AI.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
