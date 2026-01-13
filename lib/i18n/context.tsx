'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ru } from './translations/ru'
import { en } from './translations/en'

export type Language = 'ru' | 'en'

export type Translations = typeof ru

const translations: Record<Language, Translations> = { ru, en }

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = '3dgryz-language'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ru')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null
    if (saved && (saved === 'ru' || saved === 'en')) {
      setLanguageState(saved)
      document.documentElement.lang = saved
    }
    // Small delay to ensure state is updated before showing content
    requestAnimationFrame(() => {
      setIsLoaded(true)
    })
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(STORAGE_KEY, lang)
    // Update html lang attribute
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], isLoaded }}>
      <div
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.15s ease-in-out'
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
