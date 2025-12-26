import Header from '@/components/Header'
import Footer from '@/components/Footer'

const portfolioItems = [
  {
    id: 1,
    title: 'Экосистема в лицах',
    client: 'Сбербанк',
    tags: ['3D Персонажи', 'Анимация', 'Айдентика'],
    timeline: '6 недель',
    results: '6 брендовых персонажей + анимации для digital и наружной рекламы',
    cost: 'От $8,000',
    image: '🏦',
  },
  {
    id: 2,
    title: 'Летние эмоджи-аватары',
    client: 'ВКонтакте',
    tags: ['3D Персонажи', 'AR-фильтры', 'Стикер-пак'],
    timeline: '5 недель',
    results: 'Библиотека из 8 кастомизируемых персонажей для сторис и AR',
    cost: 'От $6,000',
    image: '😎',
  },
  {
    id: 3,
    title: 'Живой двор',
    client: 'ПИК / Самолет',
    tags: ['3D Визуализация', 'VR/AR', 'Архитектура'],
    timeline: '8 недель',
    results: '6 живых сцен с персонажами для сайта и VR-тура',
    cost: 'От $10,000',
    image: '🏘️',
  },
  {
    id: 4,
    title: 'Мир внутри самолёта',
    client: 'Аэрофлот',
    tags: ['3D Иллюстрации', 'Анимация', 'Брендинг'],
    timeline: '6 недель',
    results: '8 визуалов в минималистичном стиле для digital-каналов',
    cost: 'От $7,000',
    image: '✈️',
  },
  {
    id: 5,
    title: 'Умные гаджеты с характером',
    client: 'Ростелеком',
    tags: ['3D Персонажи', 'Продуктовая визуализация'],
    timeline: '4 недели',
    results: '5 сюжетных рендеров для лендингов и соцсетей',
    cost: 'От $5,000',
    image: '📱',
  },
  {
    id: 6,
    title: 'Образовательный путь',
    client: 'Яндекс Практикум',
    tags: ['3D Персонажи', 'Сторителлинг', 'Иллюстрации'],
    timeline: '6 недель',
    results: '7 сцен-комиксов для образовательного контента',
    cost: 'От $7,500',
    image: '📚',
  },
  {
    id: 7,
    title: 'Кто внутри пачки?',
    client: "PepsiCo / Lay's",
    tags: ['3D Персонажи', 'Упаковка', 'Рекламная кампания'],
    timeline: '5 недель',
    results: '5 брендовых персонажей-ингредиентов для упаковки и digital',
    cost: 'От $6,500',
    image: '🥔',
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 0, 239, 0.1) 0%, rgba(10, 10, 15, 1) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black uppercase mb-6">
            Наше <span className="gradient-text">портфолио</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Реальные проекты, реальные результаты для бизнеса
          </p>
        </div>
      </section>

      {/* Portfolio Grid - Шахматное расположение */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {portfolioItems.map((item, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={item.id}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center glass rounded-2xl p-8 hover:border-accent-purple transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Image Container */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-xl flex items-center justify-center text-8xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border border-white/10">
                    {item.image}
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full md:w-2/3">
                  <div className="text-sm text-accent-purple uppercase mb-2">
                    {item.client}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
                    {item.title}
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-text-muted min-w-[100px]">Сроки:</span>
                      <span className="text-text-primary font-medium">{item.timeline}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-muted min-w-[100px]">Результаты:</span>
                      <span className="text-accent-purple font-medium">{item.results}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-text-muted min-w-[100px]">Стоимость:</span>
                      <span className="text-accent-pink font-bold text-xl font-mono">{item.cost}</span>
                    </div>
                  </div>

                  <button className="px-6 py-3 border border-accent-purple rounded-lg text-accent-purple font-bold uppercase text-sm hover:bg-accent-purple/20 transition-smooth">
                    Подробнее →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(240, 197, 0, 0.1) 0%, rgba(78, 0, 239, 0.1) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-6">
            Готовы создать <span className="gradient-text-gold-purple">свой проект?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            Получите бесплатный концепт менее чем за час
          </p>

          <div className="flex justify-center">
            <a href="/get-concept" className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase hover:glow-lime hover:scale-105 transition-all duration-300 shine-button">
              Получить концепт
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
