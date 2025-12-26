'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(107, 42, 255, 0.2) 0%, rgba(10, 10, 15, 1) 50%, rgba(255, 107, 157, 0.15) 100%)'
        }}
      ></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(188, 240, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(188, 240, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* 3D Placeholder */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Placeholder for 3D model */}
            <div className="absolute inset-0 rounded-full opacity-30 blur-3xl animate-pulse"
              style={{
                background: 'radial-gradient(circle, #6B2AFF 0%, #B794F6 50%, #FF6B9D 100%)'
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-500 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(107, 42, 255, 0.4) 0%, rgba(183, 148, 246, 0.4) 50%, rgba(255, 107, 157, 0.4) 100%)'
                }}
              >
                <span className="text-6xl md:text-8xl font-mono font-bold gradient-text">3D</span>
              </div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-hero font-black uppercase mb-6 leading-tight">
          <span className="gradient-text">3D-студия</span><br />
          нового поколения
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
          Создаем визуальный контент, который работает на ваш бизнес
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/get-concept" className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-base hover:glow-lime hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center shine-button">
            Получить бесплатный концепт за час
          </a>
          <a href="/services" className="px-8 py-4 border border-accent-purple rounded-lg text-text-primary font-bold uppercase text-base hover:bg-accent-purple/20 hover:glow-purple transition-smooth w-full sm:w-auto text-center">
            Услуги
          </a>
        </div>
      </div>
    </section>
  )
}
