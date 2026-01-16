'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/i18n'
import { getAssetPath } from '@/lib/utils'

export default function GetConceptPage() {
  const router = useRouter()
  const { t, language } = useLanguage()

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

  const [submitError, setSubmitError] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setSubmitError(false)

    try {
      const submitData = new FormData()
      submitData.append('description', formData.description)
      submitData.append('style', formData.style)
      submitData.append('name', formData.name)
      submitData.append('contact', formData.contact)

      // Добавляем файлы
      formData.references.forEach((file, index) => {
        submitData.append(`reference_${index}`, file)
      })

      const response = await fetch('/api/send-concept', {
        method: 'POST',
        body: submitData,
      })

      const result = await response.json()

      if (result.success) {
        // Clear localStorage after successful submission
        localStorage.removeItem('conceptFormData')
        setSubmitSuccess(true)
      } else {
        setSubmitError(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(true)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      const combined = [...formData.references, ...newFiles].slice(0, 10)
      setFormData({
        ...formData,
        references: combined,
      })
      // Reset input to allow selecting the same file again
      e.target.value = ''
    }
  }

  const removeFile = (index: number) => {
    setFormData({
      ...formData,
      references: formData.references.filter((_, i) => i !== index),
    })
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
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-black uppercase mb-4 md:mb-6">
            <span className="md:inline block">{t.getConcept.hero.title}</span>{' '}
            <span className="gradient-text-lime-gold">{t.getConcept.hero.titleHighlight}</span>{' '}
            <span className="md:inline block">{t.getConcept.hero.title2}</span>
          </h1>
          <p className="text-base md:text-xl text-text-secondary">
            {t.getConcept.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {submitSuccess ? (
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <div className="text-6xl mb-6">✓</div>
              <h2 className="text-3xl font-black uppercase mb-4 text-accent-lime">
                {language === 'ru' ? 'Заявка отправлена!' : 'Request Sent!'}
              </h2>
              <p className="text-text-secondary mb-8">
                {language === 'ru'
                  ? 'Мы свяжемся с вами в течение часа и пришлём концепты.'
                  : 'We will contact you within an hour and send the concepts.'}
              </p>
              <Link href="/" className="px-8 py-4 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase inline-block hover:scale-105 transition-all">
                {language === 'ru' ? 'На главную' : 'Back to Home'}
              </Link>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-12">
              {/* Step 1: Description */}
              <div className="mb-6 md:mb-8">
                <label className="block text-sm md:text-lg font-bold uppercase mb-2 md:mb-3 text-accent-lime">
                  {t.getConcept.form.step1.label} <span className="text-accent-pink">{t.getConcept.form.step1.required}</span>
                </label>
                <p className="text-xs md:text-sm text-text-muted mb-3 md:mb-4">
                  {t.getConcept.form.step1.hint}
                </p>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-bg-darker border border-white/10 rounded-lg p-4 text-text-primary focus:border-accent-lime focus:outline-none transition-smooth min-h-[150px]"
                  placeholder={t.getConcept.form.step1.placeholder}
                  required
                />
              </div>

              {/* Step 2: Style */}
              <div className="mb-6 md:mb-8">
                <label className="block text-sm md:text-lg font-bold uppercase mb-2 md:mb-3 text-accent-lime">
                  {t.getConcept.form.step2.label} <span className="text-accent-pink">{t.getConcept.form.step2.required}</span>
                </label>
                {/* Mobile: horizontal cards */}
                <div className="flex flex-col gap-2 md:hidden">
                  {t.getConcept.form.step2.styles.map((style) => (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, style: style.id })}
                      className={`p-2 border-2 rounded-xl transition-all flex items-center gap-3 ${
                        formData.style === style.id
                          ? 'border-accent-lime bg-accent-lime/10'
                          : 'border-white/10'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden relative flex-shrink-0">
                        <Image
                          src={getAssetPath(`/styles/${style.id}.jpg`)}
                          alt={style.label}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold uppercase">{style.label}</div>
                        <div className="text-xs text-text-muted">{style.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
                {/* Desktop: grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-4">
                  {t.getConcept.form.step2.styles.map((style) => (
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
                      <div className="aspect-square rounded-lg overflow-hidden mb-3 relative">
                        <Image
                          src={getAssetPath(`/styles/${style.id}.jpg`)}
                          alt={style.label}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-lg font-bold uppercase mb-1">{style.label}</div>
                      <div className="text-xs text-text-muted">{style.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: References */}
              <div className="mb-6 md:mb-8">
                <label className="block text-sm md:text-lg font-bold uppercase mb-2 md:mb-3 text-accent-lime">
                  {t.getConcept.form.step3.label}
                </label>
                <p className="text-xs md:text-sm text-text-muted mb-3 md:mb-4">
                  {t.getConcept.form.step3.hint}
                </p>

                {/* Image Previews */}
                {formData.references.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                    {formData.references.map((file, index) => (
                      <div key={index} className="relative group aspect-square">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg border border-white/10"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-accent-pink rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {formData.references.length < 10 && (
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-accent-lime/50 transition-all">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-purple/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="text-lg font-bold mb-2">{t.getConcept.form.step3.uploadText}</div>
                      <div className="text-sm text-text-muted">
                        {t.getConcept.form.step3.uploadHint}
                      </div>
                    </label>
                    {formData.references.length > 0 && (
                      <div className="mt-4 text-accent-lime font-bold">
                        {formData.references.length} / 10
                      </div>
                    )}
                  </div>
                )}

                {formData.references.length >= 10 && (
                  <div className="text-center text-accent-lime font-bold mt-2">
                    {language === 'ru' ? 'Максимум 10 изображений загружено' : 'Maximum 10 images uploaded'}
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="mb-6 md:mb-8">
                <label className="block text-sm md:text-lg font-bold uppercase mb-2 md:mb-3 text-accent-lime">
                  {t.getConcept.form.step4.label} <span className="text-accent-pink">{t.getConcept.form.step4.required}</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t.getConcept.form.step4.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-bg-darker border border-white/10 rounded-lg p-4 text-text-primary focus:border-accent-lime focus:outline-none transition-smooth"
                    required
                  />
                  <input
                    type="text"
                    placeholder={t.getConcept.form.step4.contactPlaceholder}
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="bg-bg-darker border border-white/10 rounded-lg p-4 text-text-primary focus:border-accent-lime focus:outline-none transition-smooth"
                    required
                  />
                </div>
                <p className="text-xs text-text-muted mt-2">
                  {t.getConcept.form.step4.hint}
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isGenerating}
                className="w-full px-4 md:px-8 py-4 md:py-5 bg-gradient-to-r from-accent-lime to-accent-gold rounded-lg text-bg-dark font-bold uppercase text-sm md:text-lg hover:glow-lime hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shine-button"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="animate-spin">⚡</span>
                    {t.getConcept.form.submitting}
                  </span>
                ) : (
                  t.getConcept.form.submit
                )}
              </button>

              {submitError && (
                <p className="text-accent-pink mt-4 text-center">
                  {language === 'ru'
                    ? 'Ошибка отправки. Попробуйте ещё раз или напишите нам в Telegram.'
                    : 'Sending error. Please try again or contact us via Telegram.'}
                </p>
              )}

              <p className="text-xs text-text-muted mt-4 text-center">
                {t.getConcept.form.agreement}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-10 md:py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-accent-purple/5 to-bg-dark"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-6 md:mb-12 text-center">
            {t.getConcept.benefits.title} <span className="gradient-text">{t.getConcept.benefits.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-8">
            {t.getConcept.benefits.items.map((item, i) => (
              <div key={i} className="glass rounded-xl p-3 md:p-8 text-center">
                <div className="text-2xl md:text-6xl font-black font-mono mb-1 md:mb-4 text-accent-purple">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xs md:text-xl font-bold uppercase mb-1 md:mb-2">{item.title}</h3>
                <p className="text-text-muted text-[10px] md:text-base hidden md:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
