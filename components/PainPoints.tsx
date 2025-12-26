'use client'

export default function PainPoints() {
  const painPoints = [
    {
      problem: "Традиционная 3D-разработка занимает месяцы работы",
      solution: "AI-инструменты в руках наших экспертов сокращают сроки в 5-10 раз. Вместо месяцев — недели, вместо недель — дни, в зависимости от задачи"
    },
    {
      problem: "Традиционная студия — десятки специалистов и большие расходы",
      solution: "AI-ускорение позволяет работать эффективной командой из нескольких специалистов. Сокращаем издержки — снижаем стоимость без потери качества"
    },
    {
      problem: "В традиционном 3D нужно выбирать между качеством и скоростью",
      solution: "AI-инструменты + опыт 3D-художников = premium качество за дни, а не месяцы. Получаете и скорость, и качество"
    }
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-darker to-bg-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display font-black uppercase mb-4">
            Почему бренды выбирают <span className="gradient-text">AI-ускоренный 3D-контент</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-bg-darker/50 backdrop-blur-sm hover:border-accent-purple/50 transition-all duration-300 hover:glow-purple flex flex-col">
                {/* Problem as centered bold heading with fixed height */}
                <h3 className="text-lg font-bold text-text-primary mb-6 leading-relaxed text-center min-h-[80px] flex items-center justify-center">
                  {item.problem}
                </h3>

                {/* Solution without arrow */}
                <div className="space-y-2 mt-auto min-h-[140px] flex flex-col justify-end">
                  <p className="text-sm uppercase font-bold text-accent-lime text-center">Наше решение:</p>
                  <p className="text-text-secondary text-base leading-relaxed text-center">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'radial-gradient(circle at center, rgba(107, 42, 255, 0.3), transparent 70%)'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
