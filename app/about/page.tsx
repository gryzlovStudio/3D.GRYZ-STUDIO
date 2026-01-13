'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/i18n'

export default function AboutPage() {
  const { t } = useLanguage()

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
            <span className="gradient-text-lime-gold">{t.about.hero.title1}</span><br />
            {t.about.hero.title2}<br />
            <span className="gradient-text-gold-purple">{t.about.hero.title3}</span>
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
                {t.about.mission.title} <span className="text-accent-purple">{t.about.mission.titleHighlight}</span>
              </h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>{t.about.mission.text1}</p>
                <p>{t.about.mission.text2}</p>
                <p>{t.about.mission.text3}</p>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-8">
              {t.about.stats.map((stat, i) => (
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
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-16 text-center">
            {t.about.technologies.title} <span className="gradient-text-gold-purple">{t.about.technologies.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.technologies.items.map((tech, i) => (
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
            {t.about.team.title} <span className="gradient-text">{t.about.team.titleHighlight}</span>
          </h2>
          <p className="text-xl text-text-secondary mb-16 max-w-3xl mx-auto">
            {t.about.team.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.about.team.members.map((team, i) => (
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
            {t.about.cta.title} <span className="gradient-text-lime-gold">{t.about.cta.titleHighlight}</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            {t.about.cta.subtitle}
          </p>

          <div className="flex justify-center">
            <a href="/get-concept" className="px-12 py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-lg hover:glow-lime hover:scale-105 transition-all duration-300 shine-button">
              {t.about.cta.button}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
