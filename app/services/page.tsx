import Header from '@/components/Header'
import Footer from '@/components/Footer'

const services = [
  {
    title: '3D-персонажи и маскоты',
    subtitle: 'Создаем лица брендов',
    description: 'Разрабатываем уникальных персонажей, которые становятся узнаваемым символом вашего бренда. От концепта и истории до финальной модели.',
    features: [
      'Брендовые персонажи и маскоты',
      'Персонажи для игр',
      'Персонажи для анимации и мультфильмов',
      'Персонажи для рекламы и маркетинга',
      'Разработка истории и характера',
      'Создание брендбука персонажа',
    ],
  },
  {
    title: 'Рекламные видео и анимации',
    subtitle: 'Контент, который продает',
    description: '3D анимированные видео для маркетинга и рекламы. Производство в 10x быстрее с помощью AI-ускоренного пайплайна.',
    features: [
      'Explainer videos (объясняющие ролики)',
      'Product animations (презентация продуктов)',
      'Рекламные ролики для ТВ и digital',
      'Контент для социальных сетей',
      'Motion graphics и титры',
      'Анимированные логотипы',
    ],
  },
  {
    title: 'Контент для маркетинга',
    subtitle: 'Вирусный контент для соцсетей',
    description: 'Создаем engaging контент для социальных сетей: от стикеров до AR-масок. Выделяем ваш бренд в digital-пространстве.',
    features: [
      'Короткие видео для Reels/TikTok/Shorts',
      'Стикер-паки и эмодзи',
      'AR-маски и фильтры',
      'Анимированные посты и сторис',
      'Branded content для кампаний',
      '3D-баннеры и креативы',
    ],
  },
  {
    title: 'Игровые ассеты и метавселенные',
    subtitle: 'Production-ready модели',
    description: 'Персонажи, окружение, props для игр и метавселенных. Оптимизированные модели с полной документацией.',
    features: [
      'Персонажи для игр',
      'Игровое окружение и локации',
      'Props и предметы (оружие, мебель, техника)',
      'NFT-коллекции и аватары',
      'Ассеты для метавселенных',
      'Unity/Unreal ready оптимизация',
      'LOD-модели и оптимизация',
    ],
  },
  {
    title: 'Продуктовая визуализация',
    subtitle: 'Фотореализм без фотосессий',
    description: 'Создаем фотореалистичные рендеры продуктов. Замена дорогих фотосессий на AI-ускоренное 3D производство.',
    features: [
      'Фотореалистичные рендеры продуктов',
      '360° обзоры продуктов',
      'Визуализация для e-commerce',
    ],
  },
  {
    title: 'VR/AR опыт',
    subtitle: 'Погружение в продукт',
    description: 'Виртуальные шоурумы, AR примерки, интерактивные презентации продуктов. Полное погружение клиента в ваш продукт.',
    features: [
      'Виртуальные шоурумы',
      'AR-примерка продуктов',
      'AR-фильтры для социальных сетей',
    ],
  },
  {
    title: 'AI-ускоренное производство',
    subtitle: 'Массовое производство контента',
    description: 'Генерация сотен вариантов концептов, текстур, фонов с помощью AI. От идеи до финального результата за часы, а не недели.',
    features: [
      'Генерация концепт-артов',
      'Создание текстур и материалов',
      'Генерация фонов и окружения',
      'Перенос стилей (style transfer)',
      'Пакетная обработка (сотни вариантов)',
      'Апскейлинг и улучшение качества',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative min-h-screen flex items-center">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 0, 239, 0.1) 0%, rgba(10, 10, 15, 1) 50%, rgba(240, 197, 0, 0.05) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-tight mb-8">
            <span className="gradient-text-lime-gold">Создаем контент,</span><br />
            <span className="gradient-text-gold-purple">который работает</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* First 6 services - regular cards */}
            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-8 hover:border-accent-purple transition-all duration-300"
              >
                {/* Title */}
                <h2 className="text-4xl font-black uppercase mb-2 group-hover:text-accent-purple transition-colors">
                  {service.title}
                </h2>

                {/* Subtitle */}
                <div className="text-accent-pink uppercase text-sm font-bold mb-4">
                  {service.subtitle}
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-accent-purple">→</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* 7th service - AI-ускоренное производство - special card */}
            <div className="lg:col-span-2 group glass rounded-2xl p-12 hover:border-accent-lime transition-all duration-300 bg-gradient-to-br from-accent-purple/5 to-accent-lime/5">
              <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-5xl font-black uppercase mb-3 group-hover:text-accent-lime transition-colors text-center">
                  {services[6].title}
                </h2>

                {/* Subtitle */}
                <div className="text-accent-lime uppercase text-base font-bold mb-6 text-center">
                  {services[6].subtitle}
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-8 leading-relaxed text-lg text-center">
                  {services[6].description}
                </p>

                {/* Button */}
                <div className="text-center">
                  <a
                    href="/ai-content"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base hover:glow-lime hover:scale-105 transition-all duration-300 shine-button"
                  >
                    Подробнее →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-purple/5 to-bg-dark"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-16 text-center">
            Наш <span className="gradient-text">процесс</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Бриф', desc: 'Изучаем ваши цели и задачи' },
              { step: '02', title: 'Концепт', desc: 'AI генерация вариантов менее часа' },
              { step: '03', title: 'Производство', desc: '3D создание и анимация' },
              { step: '04', title: 'Delivery', desc: 'Финальные файлы + поддержка' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-black font-mono text-accent-purple mb-4 opacity-50">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-6">
            Начнем <span className="gradient-text-gold-purple">ваш проект?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            Бесплатная консультация и концепт менее чем за час
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
