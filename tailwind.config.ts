import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Темный фон
        'bg-dark': '#0A0A0F',
        'bg-darker': '#050508',
        'bg-card': '#12121A',

        // Акцентные цвета (новая палитра)
        'accent-purple': '#6B2AFF', // Основной фиолетовый (более приглушенный)
        'accent-pink': '#FF6B9D',   // Розовый для градиентов
        'accent-lime': '#BCF000',   // Лайм для кнопок/акцентов
        'accent-gold': '#F0C500',   // Золотой для кнопок/акцентов

        // Текст
        'text-primary': '#FFFFFF',
        'text-secondary': '#E8E8E8',
        'text-muted': '#888888',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2rem, 5vw, 4.5rem)',
        'display': 'clamp(1.5rem, 3.5vw, 3rem)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
