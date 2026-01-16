import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных',
  description: 'Согласие на обработку персональных данных студии 3D.GRYZ.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PersonalDataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
