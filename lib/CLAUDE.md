# lib/ — Утилиты, данные и мультиязычность

> **Проект:** `../../CLAUDE.md` | **Студия:** `../../../../CLAUDE.md`

## Файлы

### `blog.ts` (156 КБ) — База данных блога

Содержит все статьи блога как массив `blogPosts: BlogPost[]`.

**Интерфейс BlogPost:**
```typescript
{
  slug: string              // URL-идентификатор
  title: { ru, en }         // Заголовок на двух языках
  excerpt: { ru, en }       // Отрывок
  content: { ru, en }       // Полный текст (Markdown)
  author: string            // Автор
  publishedAt: string       // Дата публикации
  updatedAt?: string        // Дата обновления
  coverImage: string        // Путь к обложке
  tags: string[]            // Теги
  readingTime: number       // Время чтения (мин)
  faqItems?: FAQ[]          // FAQ для статьи (опционально)
}
```

**Текущие статьи (9 шт.):**
1. `3d-mascots-for-brands` — 3D-маскоты для брендов (2026-01-28)
2. `3d-product-visualization-cost` — Стоимость 3D визуализации (2026-01-26)
3. `ar-3d-fitting-wildberries` — AR и 3D примерка на Wildberries (2026-01-23)
4. `3d-visualization-ai-content-trends-2026` — 10 трендов 2026 (2026-01-20)
5. `3d-render-vs-photography` — 3D рендер vs фотосъёмка (2026-01-17)
6. `ai-tools-for-marketplace-content` — Нейросети для маркетплейсов (2026-01-14)
7. `3d-visualization-for-marketplaces` — Гайд для селлеров WB и Ozon (2026-01-11)
8. `neural-avatars-for-business` — Нейро-аватары для бизнеса (2026-01-08)
9. `ai-content-cost` — Стоимость AI-контента (2026-01-05)

**Экспортируемые функции:**
- `getAllBlogPosts()` — все посты (для листинга `/blog`)
- `getBlogPost(slug)` — один пост по slug (для `/blog/[slug]`)

**Добавление статьи:**
1. Добавить объект `BlogPost` в массив `blogPosts`
2. Обновить `public/sitemap.xml` — добавить `<url>` для нового slug
3. Build → commit → push → переиндексация

---

### `utils.ts` (69 Б) — Утилиты

- `getAssetPath(path)` — возвращает путь без изменений (заготовка для CDN)

---

### `i18n/` — Мультиязычность (RU/EN)

#### `i18n/index.ts` — Экспорт
- `LanguageProvider` — провайдер контекста
- `useLanguage()` — хук для получения текущего языка и переводов
- Типы: `Language`, `Translations`

#### `i18n/context.tsx` (1.8 КБ) — Контекст
- Язык по умолчанию: русский
- Сохраняет выбор в `localStorage` (ключ `3dgryz-language`)
- Обновляет `document.documentElement.lang`
- Хук `useLanguage()` возвращает: `{ language, setLanguage, t }` — где `t` это объект переводов

#### `i18n/translations/ru.ts` (28 КБ) — Русские тексты
#### `i18n/translations/en.ts` (28 КБ) — Английские тексты

Структура переводов (одинаковая для обоих языков):
```
header: { nav, logo }
footer: { company, product, resources, contact, social }
hero: { title, subtitle, cta }
painPoints: { title, items[] }
process: { title, steps[] }
cases: { title, items[] }
whyUs: { title, items[] }
faq: { home[], services[] }
about: { mission, values, technologies, team }
services: { items[], process }
portfolio: { projects[] }
blog: { title, readMore }
cookieBanner: { text, accept, decline }
```

**При добавлении нового текста:**
1. Добавить ключ в `ru.ts`
2. Добавить ключ в `en.ts`
3. Использовать через `const { t } = useLanguage()` → `t.section.key`

---

*Последнее обновление: 28 января 2026*
