import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AIContentPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative min-h-screen flex items-center">
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(78, 0, 239, 0.2) 0%, rgba(10, 10, 15, 1) 70%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-tight mb-8">
            AI-УСКОРЕННОЕ<br />
            <span className="gradient-text">3D ПРОИЗВОДСТВО</span>
          </h1>
          <p className="text-2xl text-text-secondary max-w-3xl mx-auto mb-12">
            Создаем <span className="text-accent-lime font-bold">100 концептов</span> за время одного традиционного
          </p>

          <a href="/get-concept" className="inline-block px-12 py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-lg hover:glow-lime hover:scale-105 transition-all duration-300 shine-button">
            Попробовать бесплатно
          </a>
        </div>
      </section>

      {/* What is AI Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-16 text-center">
            Что такое <span className="gradient-text-gold-purple">ИИ-контент?</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                ИИ-контент — это использование искусственного интеллекта для создания, модификации
                и оптимизации 3D моделей, текстур, анимаций и визуальных эффектов.
              </p>
              <p>
                Мы не заменяем художников на AI. Мы даем художникам суперспособности,
                ускоряя рутинные процессы и позволяя сфокусироваться на творчестве.
              </p>
              <p className="text-accent-lime font-bold text-xl">
                Результат: концепты за часы вместо недель. Неограниченные итерации. Фокус на качестве, а не на ожидании.
              </p>
            </div>

            {/* Right - Visual */}
            <div className="glass rounded-2xl p-12 text-center flex flex-col items-center justify-center">
              <div className="text-6xl font-black font-mono text-accent-lime mb-4">
                10x
              </div>
              <div className="text-xl uppercase font-bold">
                Ускорение производства
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-purple/5 to-bg-dark"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-16 text-center">
            Возможности <span className="gradient-text">AI</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Генерация концептов',
                desc: 'Создание сотен вариантов концептов персонажей, окружения и продуктов за минуты',
              },
              {
                title: 'Создание текстур',
                desc: 'Фотореалистичные текстуры и материалы любой сложности за считанные минуты',
              },
              {
                title: 'Генерация видео',
                desc: 'AI-генерация анимаций и видео на основе ваших идей и референсов',
              },
              {
                title: 'Апскейлинг',
                desc: 'Увеличение разрешения до 8K с сохранением качества и детализации',
              },
              {
                title: 'Перенос стиля',
                desc: 'Применение стиля одного изображения к другому для создания уникальных визуалов',
              },
              {
                title: 'Быстрый рендеринг',
                desc: 'AI-ускоренный рендеринг — финальная картинка в разы быстрее традиционного',
              },
            ].map((capability, i) => (
              <div key={i} className="glass rounded-xl p-8 hover:border-accent-lime transition-all">
                <h3 className="text-2xl font-bold uppercase mb-3 text-accent-gold">
                  {capability.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {capability.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Traditional vs AI */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-16 text-center">
            Как AI ускоряет <span className="gradient-text">3D-производство</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Without AI */}
            <div className="glass rounded-2xl p-8 border-text-muted/20">
              <h3 className="text-3xl font-bold uppercase mb-8 text-text-secondary">
                Без AI
              </h3>
              <ul className="space-y-4">
                {[
                  'Концепты создаются вручную — недели на итерацию',
                  'Количество вариантов ограничено временем',
                  'Рендеринг требует мощного оборудования',
                  'Много времени на рутинные задачи',
                  'Длительное ожидание результата',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-text-muted text-xl">•</span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With AI */}
            <div className="glass rounded-2xl p-8 border-accent-lime/30 bg-gradient-to-br from-accent-lime/5 to-transparent">
              <h3 className="text-3xl font-bold uppercase mb-8 text-accent-lime">
                С технологиями AI
              </h3>
              <ul className="space-y-4">
                {[
                  'Первые концепты за часы, а не недели',
                  'Сотни вариантов для выбора лучшего',
                  'AI-рендеринг без дорогого оборудования',
                  'Автоматизация рутины — больше времени на творчество',
                  'Быстрая реализация идей в визуал',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent-lime text-xl">✓</span>
                    <span className="text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-6">
            Готовы <span className="gradient-text-gold-purple">попробовать AI?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            Бесплатная консультация по AI-производству для вашего проекта
          </p>

          <a href="/get-concept" className="px-12 py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-lg hover:glow-lime hover:scale-105 transition-all duration-300 shine-button inline-block">
            Связаться с нами
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
