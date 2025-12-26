'use client'

const solutions = [
  {
    title: 'Брендовые Персонажи',
    description: 'Узнаваемое лицо вашего бренда',
    metric: '+280%',
    metricLabel: 'вовлеченность',
    icon: '🎭',
  },
  {
    title: 'Видео-Контент',
    description: 'Вирусный контент, который продает',
    metric: '4.2x',
    metricLabel: 'ROI на рекламе',
    icon: '🎬',
  },
  {
    title: 'Продуктовая Визуализация',
    description: 'Фотореалистичные рендеры продуктов',
    metric: '+45%',
    metricLabel: 'конверсия',
    icon: '📦',
  },
  {
    title: 'VR/AR Experiences',
    description: 'Immersive product experiences',
    metric: '+380%',
    metricLabel: 'qualified leads',
    icon: '🥽',
  },
  {
    title: 'Игровые Ассеты',
    description: 'Оптимизированные high-quality модели',
    metric: '70%',
    metricLabel: 'faster production',
    icon: '🎮',
  },
  {
    title: 'AI-Генерация',
    description: 'Массовое производство контента',
    metric: '100x',
    metricLabel: 'концептов',
    icon: '🤖',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-purple/5 to-bg-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-black uppercase mb-4">
            Решения для вашего <span className="gradient-text">бизнеса</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Каждое решение - это измеримый результат для вашего роста
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 hover:border-accent-purple transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{solution.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-accent-purple transition-colors">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6">
                  {solution.description}
                </p>

                {/* Metric */}
                <div className="border-t border-white/10 pt-4">
                  <div className="text-3xl font-bold text-accent-purple font-mono">
                    {solution.metric}
                  </div>
                  <div className="text-sm text-text-muted uppercase">
                    {solution.metricLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
