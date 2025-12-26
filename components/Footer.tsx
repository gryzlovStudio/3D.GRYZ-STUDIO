'use client'

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/10 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-lime to-accent-purple rounded-lg flex items-center justify-center">
                <span className="text-bg-dark font-bold text-xl font-mono">3D</span>
              </div>
              <span className="text-xl font-bold font-mono uppercase">GRYZ</span>
            </div>
            <p className="text-text-muted text-sm">
              Превращаем идеи в высокодоходный визуальный контент
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm">Компания</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  О нас
                </a>
              </li>
              <li>
                <a href="/services" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  Услуги
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="/ai-content" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  ИИ-контент
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions/Services */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm">Решения</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services#3d-characters" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  3D-персонажи
                </a>
              </li>
              <li>
                <a href="/services#video" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  Рекламные видео
                </a>
              </li>
              <li>
                <a href="/services#marketing" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  Контент для маркетинга
                </a>
              </li>
              <li>
                <a href="/get-concept" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  Получить концепт
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm">Контакты</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:gryzlovstudio@gmail.com" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  gryzlovstudio@gmail.com
                </a>
              </li>
              <li>
                <a href="https://t.me/ddd_gryz" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/3d.gryz?igsh=Ynlobm9qOGRsOW1w&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/gryzlovstudio" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-lime transition-smooth text-sm">
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-text-muted text-sm">
                © 2025 3D.GRYZ. Все права защищены.
              </p>
              <span className="text-text-muted hidden md:inline">|</span>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <a href="/privacy-policy" className="text-text-muted hover:text-accent-lime transition-smooth text-xs">
                  Политика конфиденциальности
                </a>
                <span className="text-text-muted hidden md:inline">|</span>
                <a href="/personal-data" className="text-text-muted hover:text-accent-lime transition-smooth text-xs">
                  Обработка персональных данных
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-text-muted hover:text-accent-lime transition-smooth text-sm uppercase">
                RU
              </a>
              <span className="text-text-muted">|</span>
              <a href="#" className="text-text-muted hover:text-accent-lime transition-smooth text-sm uppercase">
                EN
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
