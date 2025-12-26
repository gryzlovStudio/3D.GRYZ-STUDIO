'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function GetConceptPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    description: '',
    style: 'realistic',
    references: [] as File[],
    name: '',
    contact: '',
  })
  const [isGenerating, setIsGenerating] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('conceptFormData')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setFormData({
          ...formData,
          description: parsed.description || '',
          style: parsed.style || 'realistic',
          name: parsed.name || '',
          contact: parsed.contact || '',
        })
      } catch (e) {
        console.error('Failed to parse saved form data', e)
      }
    }
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    const dataToSave = {
      description: formData.description,
      style: formData.style,
      name: formData.name,
      contact: formData.contact,
    }
    localStorage.setItem('conceptFormData', JSON.stringify(dataToSave))
  }, [formData.description, formData.style, formData.name, formData.contact])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Симуляция API call
    // TODO: Заменить на реальный API endpoint
    setTimeout(() => {
      // Clear localStorage after successful submission
      localStorage.removeItem('conceptFormData')

      // Redirect to result page
      router.push('/concept-result')
    }, 3000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        references: Array.from(e.target.files),
      })
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 0, 239, 0.1) 0%, rgba(10, 10, 15, 1) 100%)'
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black uppercase mb-6">
            Получить <span className="gradient-text-lime-gold">бесплатный</span> концепт
          </h1>
          <p className="text-xl text-text-secondary">
            Опишите вашу идею, выберите стиль, добавьте референсы — и получите 3 уникальных концепта менее чем за час
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-12">
              {/* Step 1: Description */}
              <div className="mb-8">
                <label className="block text-lg font-bold uppercase mb-3 text-accent-lime">
                  1. Опишите вашу идею <span className="text-accent-pink">*</span>
                </label>
                <p className="text-sm text-text-muted mb-4">
                  Расскажите максимально подробно о персонаже, продукте или сцене, которую хотите создать
                </p>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-bg-darker border border-white/10 rounded-lg p-4 text-text-primary focus:border-accent-lime focus:outline-none transition-smooth min-h-[150px]"
                  placeholder="Например: Футуристический робот-барист для кофейни. Дружелюбный, стильный, с элементами стимпанка. Должен вызывать ассоциации с качественным кофе и технологиями..."
                  required
                />
              </div>

              {/* Step 2: Style */}
              <div className="mb-8">
                <label className="block text-lg font-bold uppercase mb-3 text-accent-lime">
                  2. Выберите стилистику <span className="text-accent-pink">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'realistic', label: 'Фотореалистичный', desc: 'Максимальный реализм и детализация' },
                    { id: 'stylized', label: 'Стилизованный', desc: '3D стилизованный, чистые формы' },
                    { id: 'cartoon', label: 'Мультяшный', desc: 'Яркий, выразительный стиль' },
                  ].map((style) => (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, style: style.id })}
                      className={`p-4 border-2 rounded-xl transition-all flex flex-col ${
                        formData.style === style.id
                          ? 'border-accent-lime bg-accent-lime/10'
                          : 'border-white/10 hover:border-accent-lime/50'
                      }`}
                    >
                      {/* Style preview placeholder */}
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border border-white/10 mb-3 flex items-center justify-center">
                        <div className="text-xs text-text-muted uppercase">Пример {style.label}</div>
                      </div>
                      <div className="text-lg font-bold uppercase mb-1">{style.label}</div>
                      <div className="text-xs text-text-muted">{style.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: References */}
              <div className="mb-8">
                <label className="block text-lg font-bold uppercase mb-3 text-accent-lime">
                  3. Загрузите референсы (опционально)
                </label>
                <p className="text-sm text-text-muted mb-4">
                  Прикрепите изображения, которые помогут лучше понять ваше видение (до 5 файлов)
                </p>
                <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-accent-lime/50 transition-all">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    max={5}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-purple/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="text-lg font-bold mb-2">Нажмите для загрузки</div>
                    <div className="text-sm text-text-muted">
                      PNG, JPG, WEBP до 10MB каждый
                    </div>
                  </label>
                  {formData.references.length > 0 && (
                    <div className="mt-4 text-accent-lime font-bold">
                      ✓ Загружено файлов: {formData.references.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mb-8">
                <label className="block text-lg font-bold uppercase mb-3 text-accent-lime">
                  4. Контактная информация <span className="text-accent-pink">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-bg-darker border border-white/10 rounded-lg p-4 text-text-primary focus:border-accent-lime focus:outline-none transition-smooth"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Контакт для связи"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="bg-bg-darker border border-white/10 rounded-lg p-4 text-text-primary focus:border-accent-lime focus:outline-none transition-smooth"
                    required
                  />
                </div>
                <p className="text-xs text-text-muted mt-2">
                  Укажите email, телефон или Telegram — как вам удобнее
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isGenerating}
                className="w-full px-8 py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-lg hover:glow-lime hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shine-button"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="animate-spin">⚡</span>
                    Генерируем концепты...
                  </span>
                ) : (
                  'Получить бесплатные концепты →'
                )}
              </button>

              <p className="text-xs text-text-muted mt-4 text-center">
                Отправляя форму, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-purple/5 to-bg-dark"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase mb-12 text-center">
            Что вы <span className="gradient-text">получите</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '3 уникальных концепта', desc: 'Разные вариации вашей идеи', color: 'accent-purple' },
              { title: 'Менее часа', desc: 'Мгновенный результат без ожидания', color: 'accent-lime' },
              { title: 'Абсолютно бесплатно', desc: 'Preview версия без обязательств', color: 'accent-gold' },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-8 text-center">
                <div className={`text-6xl font-black font-mono mb-4 text-${item.color}`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
