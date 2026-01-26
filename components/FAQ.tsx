'use client'

import { useState } from 'react'
import { FAQPageJsonLd } from '@/components/JsonLd'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ({ items, title, titleHighlight }: { items: FAQItem[]; title: string; titleHighlight: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 md:px-6 relative">
      <FAQPageJsonLd items={items} />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-center">
          {title} <span className="gradient-text">{titleHighlight}</span>
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden transition-all duration-300 hover:border-accent-purple"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
              >
                <span className="text-base md:text-lg font-bold pr-4">
                  {item.question}
                </span>
                <span
                  className={`text-accent-purple text-2xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
