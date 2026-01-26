'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { useLanguage } from '@/lib/i18n'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: 'Главная', url: 'https://3dgryz.ru' },
          { name: 'О нас', url: 'https://3dgryz.ru/about' },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 md:px-6 relative min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 0, 239, 0.1) 0%, rgba(10, 10, 15, 1) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-black uppercase leading-tight">
            <span className="gradient-text-lime-gold">{t.about.hero.title1}</span><br />
            {t.about.hero.title2}<br />
            <span className="gradient-text-gold-purple">{t.about.hero.title3}</span>
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Left - Text */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-8">
                {t.about.mission.title} <span className="text-accent-purple">{t.about.mission.titleHighlight}</span>
              </h2>
              <div className="space-y-6 text-base md:text-lg text-text-secondary leading-relaxed">
                <p>{t.about.mission.text1}</p>
                <p>{t.about.mission.text2}</p>
                <p>{t.about.mission.text3}</p>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="glass rounded-xl p-4 md:p-6 text-center flex flex-col items-center justify-center">
                  <div className="text-3xl md:text-5xl font-black font-mono text-accent-purple mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-text-muted uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-purple/5 to-bg-dark"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 md:mb-16 text-center">
            {t.about.values.title} <span className="gradient-text">{t.about.values.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.about.values.items.map((value, i) => (
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
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 md:mb-16 text-center">
            {t.about.technologies.title} <span className="gradient-text-gold-purple">{t.about.technologies.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {t.about.technologies.items.map((tech, i) => (
              <div key={i} className="glass rounded-xl p-4 md:p-6">
                <h3 className="text-base md:text-xl font-bold uppercase mb-4 text-accent-purple">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.tools.map((tool, j) => (
                    <li key={j} className="text-xs md:text-sm text-text-secondary flex items-center gap-2">
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
      <section className="py-24 px-4 md:px-6 relative">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(107, 42, 255, 0.1) 0%, rgba(255, 107, 157, 0.05) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8">
            {t.about.team.title} <span className="gradient-text">{t.about.team.titleHighlight}</span>
          </h2>
          <p className="text-base md:text-xl text-text-secondary mb-12 md:mb-16 max-w-3xl mx-auto">
            {t.about.team.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {t.about.team.members.map((team, i) => (
              <div key={i} className="glass rounded-2xl p-6 md:p-8">
                <div className="text-xl md:text-2xl font-bold uppercase mb-3">{team.role}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            {t.about.cta.title} <span className="gradient-text-lime-gold">{t.about.cta.titleHighlight}</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            {t.about.cta.subtitle}
          </p>

          <div className="flex justify-center">
            <Link href="/get-concept" className="px-12 py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-lg hover:glow-lime hover:scale-105 transition-all duration-300 shine-button">
              {t.about.cta.button}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
