import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative min-h-screen flex items-center">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 0, 239, 0.1) 0%, rgba(10, 10, 15, 1) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-tight">
            <span className="gradient-text-lime-gold">3D-студия</span><br />
            нового поколения.<br />
            <span className="gradient-text-gold-purple">AI × экспертиза × результат.</span>
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Text */}
            <div>
              <h2 className="text-5xl font-black uppercase mb-8">
                Наша <span className="text-accent-purple">миссия</span>
              </h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  Мы — команда 3D-художников и AI-инженеров, которые влюблены в свое дело.
                  Наша цель — создавать визуальный контент, который не просто красивый, но и работает на результат.
                </p>
                <p>
                  За годы работы мы поняли: лучшие проекты рождаются на стыке творчества и технологий.
                  Именно поэтому мы объединили классическую 3D-разработку с искусственным интеллектом.
                </p>
                <p>
                  Сегодня качественный 3D доступен не только крупным брендам. Благодаря AI мы делаем
                  профессиональный визуальный контент быстрее и доступнее для бизнеса любого размера.
                </p>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: '150+', label: 'Успешных проектов' },
                { value: '98%', label: 'Клиенты возвращаются' },
                { value: '10x', label: 'Быстрее с AI' },
                { value: '60%', label: 'Экономия бюджета' },
              ].map((stat, i) => (
                <div key={i} className="glass rounded-xl p-6 text-center flex flex-col items-center justify-center">
                  <div className="text-5xl font-black font-mono text-accent-purple mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-purple/5 to-bg-dark"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-16 text-center">
            Наши <span className="gradient-text">принципы</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Фокус на результат',
                desc: 'Каждый проект нацелен на конкретные бизнес-цели. Мы измеряем успех вашими метриками.',
              },
              {
                title: 'Технологии AI',
                desc: 'Используем передовые AI-инструменты для ускорения процессов без потери качества.',
              },
              {
                title: 'Ваш успех — наша цель',
                desc: 'Работаем как партнеры, а не подрядчики. Ваш рост — это наш приоритет.',
              },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-bold uppercase mb-4 text-accent-purple">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-16 text-center">
            Наши <span className="gradient-text-gold-purple">технологии</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: '3D Программы',
                tools: ['Blender', 'Maya', 'ZBrush', 'Substance Painter'],
              },
              {
                category: 'AI Инструменты',
                tools: ['ComfyUI', 'Flux', 'Stable Diffusion', 'Video AI'],
              },
              {
                category: 'Рендеринг',
                tools: ['Cycles', 'Octane', 'V-Ray', 'AI Render'],
              },
              {
                category: 'Игровые движки',
                tools: ['Unity', 'Unreal Engine', 'Three.js', 'WebGL'],
              },
            ].map((tech, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold uppercase mb-4 text-accent-purple">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.tools.map((tool, j) => (
                    <li key={j} className="text-sm text-text-secondary flex items-center gap-2">
                      <span className="text-accent-pink">•</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(107, 42, 255, 0.1) 0%, rgba(255, 107, 157, 0.05) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-8">
            Наша <span className="gradient-text">команда</span>
          </h2>
          <p className="text-xl text-text-secondary mb-16 max-w-3xl mx-auto">
            Профессиональные 3D-художники, AI-инженеры и аниматоры,
            объединенные одной целью — ваш успех.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                role: '3D-художники',
                count: '5+',
                desc: 'Профессионалы в Blender, Maya и ZBrush с опытом работы для крупных брендов'
              },
              {
                role: 'AI-инженеры',
                count: '3+',
                desc: 'Эксперты в ComfyUI, Stable Diffusion и генеративных технологиях'
              },
              {
                role: 'Аниматоры',
                count: '4+',
                desc: '3D-анимация и motion-дизайн для рекламы и продуктов'
              },
            ].map((team, i) => (
              <div key={i} className="glass rounded-2xl p-8">
                <div className="text-2xl font-bold uppercase mb-3">{team.role}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-6">
            Готовы <span className="gradient-text-lime-gold">работать вместе?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            Начнем с бесплатной консультации и концепта
          </p>

          <div className="flex justify-center">
            <a href="/get-concept" className="px-12 py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-lg hover:glow-lime hover:scale-105 transition-all duration-300 shine-button">
              Связаться с нами
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
