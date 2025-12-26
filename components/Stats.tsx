'use client'

const stats = [
  { value: '240%', label: 'Среднее увеличение engagement' },
  { value: '<1ч', label: 'От брифа до концепта' },
  { value: '60%', label: 'Экономия времени производства' },
  { value: '40%', label: 'Экономия бюджета' },
  { value: '150+', label: 'Успешных проектов' },
  { value: '98%', label: 'Клиентов возвращаются' },
]

export default function Stats() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-transparent to-accent-lime/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-black uppercase mb-4">
            Измеримые <span className="gradient-text">результаты</span>
          </h2>
          <p className="text-lg text-text-muted">
            Основано на 150+ проектах с 2020 года
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="mb-3">
                <span className="text-5xl md:text-6xl font-black font-mono text-accent-purple group-hover:scale-110 inline-block transition-transform group-hover:text-accent-pink">
                  {stat.value}
                </span>
              </div>
              <p className="text-sm text-text-secondary uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
