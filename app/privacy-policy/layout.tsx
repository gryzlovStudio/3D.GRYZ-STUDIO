import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности студии 3D.GRYZ. Информация о сборе, хранении и обработке персональных данных.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
