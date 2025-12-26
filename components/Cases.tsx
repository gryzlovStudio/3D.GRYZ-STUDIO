'use client'

const cases = [
  {
    title: 'Экосистема в лицах',
    client: 'Сбербанк',
    task: 'Создать серию 3D-персонажей для сервисов экосистемы',
    solution: 'Разработали 6 брендовых персонажей, каждый представляет свой сервис: Финансы, Еда, Досуг, Образование',
    result: 'Узнаваемая айдентика для digital-коммуникаций и наружной рекламы',
    image: '🏦',
  },
  {
    title: 'Живой двор',
    client: 'ПИК / Самолет',
    task: 'Оживить визуализацию ЖК с помощью реалистичных сцен',
    solution: 'Создали 6 сцен с 3D-персонажами: семьи на балконах, дети на площадке, пары в кафе',
    result: 'Эмоциональное вовлечение покупателей, визуализация "с жизнью"',
    image: '🏘️',
  },
  {
    title: 'Кто внутри пачки?',
    client: "PepsiCo / Lay's",
    task: 'Создать брендовых персонажей для упаковки и рекламы',
    solution: 'Разработали 5 персонажей-ингредиентов: озорной перец, ленивый сыр, дерзкий лимон',
    result: 'Яркая, запоминающаяся айдентика для digital-кампаний',
    image: '🥔',
  },
]

export default function Cases() {
  return (
    <section id="cases" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-gold/5 to-bg-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-black uppercase mb-4">
            Проекты <span className="gradient-text">наших клиентов</span>
          </h2>
          <p className="text-xl text-text-secondary">
            Решаем уникальные задачи для крупных брендов
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden hover:border-accent-purple transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
            >
              {/* Hero Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-accent-purple/30 to-accent-pink/30 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                  {caseStudy.image}
                </div>
                {/* Client Badge */}
                <div className="absolute top-4 right-4 bg-bg-dark/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent-purple">
                  <div className="text-sm font-bold text-accent-purple">
                    {caseStudy.client}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-purple transition-colors">
                  {caseStudy.title}
                </h3>

                {/* Description with flex-grow to push result down */}
                <div className="flex-grow mb-6">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Result - will align at same level across cards */}
                <div className="mb-4">
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold text-accent-lime">Результат:</span>{' '}
                    <span className="text-text-primary">{caseStudy.result}</span>
                  </p>
                </div>

                {/* Button - will align at same level across cards */}
                <button className="w-full py-3 border border-accent-purple rounded-lg text-accent-purple font-bold uppercase text-sm hover:bg-accent-purple/20 hover:scale-105 transition-all duration-300 mt-auto">
                  Подробнее →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-block px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg text-text-primary font-bold uppercase text-base hover:scale-105 hover:glow-purple transition-all duration-300"
          >
            Смотреть портфолио →
          </a>
        </div>
      </div>
    </section>
  )
}
