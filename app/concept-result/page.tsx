'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ConceptResultPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative min-h-screen flex items-center">
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(188, 240, 0, 0.15) 0%, rgba(10, 10, 15, 1) 70%)'
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-accent-lime/20 flex items-center justify-center">
            <svg className="w-12 h-12 text-accent-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">
            Ваши концепты <span className="gradient-text-lime-gold">готовы!</span>
          </h1>

          <p className="text-xl text-text-secondary mb-12">
            Мы отправили 3 концепта на вашу почту
          </p>

          {/* Mock Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-accent-gold/20 to-accent-purple/20 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-black font-mono text-accent-purple mb-2">
                    {String(i).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-text-muted">Концепт {i}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="glass rounded-xl p-8 mb-12 text-left">
            <h3 className="font-bold uppercase mb-3 text-accent-lime text-lg">
              Preview версия
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Это концепты с watermark и низким разрешением. Для получения полной версии в 4K,
              без watermark и с коммерческой лицензией, свяжитесь с нами.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-concept"
              className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase hover:glow-lime hover:scale-105 transition-all duration-300 shine-button"
            >
              Заказать full HD версию
            </a>
            <button
              onClick={() => router.push('/get-concept')}
              className="px-8 py-4 border border-accent-purple rounded-lg text-text-primary font-bold uppercase hover:bg-accent-purple/20 hover:scale-105 transition-all duration-300"
            >
              Создать еще концепт
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
