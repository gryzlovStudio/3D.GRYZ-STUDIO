'use client'

export default function SocialProof() {
  const clients = [
    { name: "Сбербанк", placeholder: "SB" },
    { name: "Альфа-Банк", placeholder: "AB" },
    { name: "Тинькофф", placeholder: "TF" },
    { name: "ВКонтакте", placeholder: "VK" },
    { name: "Яндекс", placeholder: "YA" },
    { name: "Ростелеком", placeholder: "RT" },
    { name: "Акконд", placeholder: "AK" }
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-bg-darker"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display font-black uppercase mb-4">
            Нам <span className="gradient-text">доверяют</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            150+ проектов для компаний из финтеха, IT, производства, недвижимости и образования
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative w-full aspect-square max-w-[140px]"
            >
              {/* Logo Placeholder */}
              <div className="w-full h-full rounded-xl border border-white/10 bg-bg-dark/50 backdrop-blur-sm flex items-center justify-center hover:border-accent-purple/50 transition-all duration-300 hover:scale-105">
                <div className="text-center p-4">
                  {/* Placeholder for logo image */}
                  <div className="w-full h-20 flex items-center justify-center mb-2">
                    <span className="text-3xl font-black font-mono text-text-muted group-hover:text-accent-lime transition-colors">
                      {client.placeholder}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted group-hover:text-text-secondary transition-colors">
                    {client.name}
                  </p>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: 'radial-gradient(circle at center, rgba(107, 42, 255, 0.3), transparent 70%)'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Note for uploading logos */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted italic">
            📌 Placeholder для логотипов. Загрузите изображения в папку /public/logos/
          </p>
        </div>
      </div>
    </section>
  )
}
