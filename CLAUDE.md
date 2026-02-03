# 3D.GRYZ Website — Claude Code Memory

> **Головная навигация:** `../../CLAUDE.md` (Студия 3D.GRYZ)
> Этот файл — детальный контекст проекта сайта. Головной CLAUDE.md содержит маршрутизацию между всеми проектами студии.

## Проект

Сайт студии 3D.GRYZ: **https://3dgryz.ru**

- **Стек:** Next.js 15, React, TypeScript, Tailwind CSS
- **Рендеринг:** Static export (`output: 'export'`) — **API-роуты НЕ работают** на продакшене
- **Репозиторий:** https://github.com/gryzlovStudio/3D.GRYZ-STUDIO.git (ветка `main`)
- **Деплой:** GitHub Pages, автоматический через GitHub Actions при пуше в `main`
- **Языки:** Русский (основной) + English

## Рабочий процесс (ВАЖНО — ЧИТАТЬ ПЕРВЫМ)

### В начале каждой сессии:

1. Прочитать этот файл `CLAUDE.md` целиком
2. `git log --oneline -10` — понять, что было сделано в прошлый раз
3. Изучить актуальное состояние кода перед правками

### После любого изменения в коде сайта — автоматически:

Каждое изменение файлов проекта СРАЗУ проходит полный цикл деплоя. Не ждать отдельного подтверждения, не спрашивать "запушить?". Изменил код = деплой + переиндексация:

1. `npm run build` — проверить сборку
2. `git add <файлы>` — добавить изменённые файлы
3. `git commit` — коммит с описательным сообщением
4. `git push` — пуш в main (триггерит деплой на GitHub Pages)
5. **Переиндексация в Яндекс.Вебмастере** — отправить изменённые URL через `/recrawl/queue`
6. **Переиндексация в Google Search Console** — отправить sitemap и/или проверить URL через MCP

### В конце каждой сессии:

Обновить этот файл `CLAUDE.md` — внести все изменения, которые произошли за сессию:
- Новые статьи, страницы, компоненты
- Изменения в структуре проекта
- Обновлённые токены или конфигурации
- Любая полезная информация для следующей сессии

Файл всегда должен содержать **актуальное** состояние проекта.

## Telegram-бот для заявок

- **Бот:** `@dgryz_webform_bot` (токен: `8394662980:AAGFBs2dRRSP8yPqLvCjMTI_x6HxY7OogSw`)
- **Получатели заявок:**
  - `1447464965` — Анастасия (`@nastya_parr`)
  - `549239472` — Danil Gryzlov (`@dgryzlov`)
- **Контактный Telegram студии:** `@ddd_gryz`
- **Реализация:** Клиентская отправка напрямую в Telegram Bot API из браузера (файл `app/get-concept/page.tsx`). Серверный API-роут `/api/send-concept` **не используется** — он не работает на статическом хостинге GitHub Pages.
- **Отслеживание конверсий:** После успешной отправки формы отправляется цель `form_submit_success` в Яндекс.Метрику (добавлено 3 февраля 2026)

## Яндекс.Вебмастер — переиндексация

### Реквизиты API

- **USER_ID:** `846729972`
- **HOST_ID:** `https%3A3dgryz.ru%3A443`
- **OAuth-токен (Вебмастер):** `y0__xD0peCTAxi3_zwg8rnqjBYw5MSmhggnj2ImsV-dOs5RQPuA485avsjjKg`

### Как отправить URL на переобход

```bash
HOST_ID="https%3A3dgryz.ru%3A443"
TOKEN="y0__xD0peCTAxi3_zwg8rnqjBYw5MSmhggnj2ImsV-dOs5RQPuA485avsjjKg"
USER_ID="846729972"
BASE="https://api.webmaster.yandex.net/v4/user/$USER_ID/hosts/$HOST_ID"

# Отправить URL на переобход
curl -s -X POST -H "Authorization: OAuth $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://3dgryz.ru/ПУТЬ/"}' \
  "$BASE/recrawl/queue"

# Проверить оставшуюся квоту (150/день)
curl -s -H "Authorization: OAuth $TOKEN" "$BASE/recrawl/quota"
```

### Что индексировать после изменений

- Все изменённые/новые страницы
- `/blog/` — если добавлена/изменена статья
- `/sitemap.xml` — если обновлён

## Google Search Console — переиндексация

### Доступные MCP-инструменты
- `mcp__google-search-console__submit_sitemap` — отправить/обновить sitemap
- `mcp__google-search-console__index_inspect` — проверить статус индексации конкретного URL
- `mcp__google-search-console__search_analytics` — запросы, клики, позиции
- `mcp__google-search-console__detect_quick_wins` — быстрые SEO-возможности

### Что делать после изменений
1. Отправить sitemap: `submit_sitemap(siteUrl="https://3dgryz.ru", feedpath="https://3dgryz.ru/sitemap.xml")`
2. Проверить индексацию новых URL: `index_inspect(siteUrl="https://3dgryz.ru", inspectionUrl="https://3dgryz.ru/ПУТЬ/")`

### Примечание
Google не имеет API для принудительного переобхода отдельных URL (в отличие от Яндекса). Переиндексация происходит через обновление sitemap. Google сам решает, когда повторно обойти страницы.

---

## MCP-серверы (настроены в `.mcp.json`)

В этой рабочей папке подключено **5 MCP-серверов:**

| Сервер | Назначение | Токен / Конфигурация |
|--------|-----------|---------------------|
| **github** | GitHub API | `github_pat_11BPK77XI...` |
| **yandex-webmaster** | Яндекс.Вебмастер API (индексация, SEO) | OAuth: `y0__xD0peCTAxi3_...dOs5RQPuA485avsjjKg` |
| **yandex-metrika** | Яндекс.Метрика (аналитика) | OAuth: `y0__xD0peCTAxjl_...FTo4bkDx4eoo6kCCXQ` |
| **google-analytics** | Google Analytics | Service account credentials |
| **google-search-console** | Google Search Console | Service account credentials |

### Расположение MCP-серверов

- Yandex Webmaster: `/Users/nasty/yandex-webmaster-mcp-server/`
- Yandex Metrika: `/Users/nasty/yandex-metrika-mcp/`
- Google Analytics: `/Users/nasty/.local/bin/google-analytics-mcp`

## Структура проекта

```
3dgryz-website/
├── app/                    # Next.js App Router
│   ├── blog/               # Блог (листинг + [slug])
│   ├── portfolio/           # Портфолио
│   ├── services/            # Услуги
│   ├── ai-content/          # AI-контент
│   ├── get-concept/         # CTA-форма (отправка в Telegram из браузера)
│   ├── about/               # О студии
│   ├── api/send-concept/    # НЕ ИСПОЛЬЗУЕТСЯ на проде (static export)
│   └── layout.tsx           # Корневой layout
├── components/              # React-компоненты
│   ├── JsonLd.tsx           # Schema.org разметка
│   ├── FAQ.tsx              # Аккордеон FAQ
│   └── YandexMetrika.tsx    # Яндекс.Метрика (ID: 106307550)
├── lib/
│   ├── blog.ts              # Данные блога (посты, типы)
│   └── i18n/                # Переводы RU/EN
├── public/
│   ├── sitemap.xml          # XML-карта сайта
│   └── blog/                # Изображения для блога
└── .github/workflows/
    └── deploy.yml           # GitHub Actions деплой
```

## Блог

Посты хранятся в `lib/blog.ts` как массив `blogPosts: BlogPost[]`.

### Текущие статьи (9 шт.):

1. `3d-mascots-for-brands` — 3D-маскоты для брендов. Как создать запоминающегося персонажа (2026-01-28)
2. `3d-product-visualization-cost` — Стоимость 3D визуализации продукта в 2026 году (2026-01-26)
3. `ar-3d-fitting-wildberries` — AR и 3D примерка на Wildberries: подготовка 3D-моделей (2026-01-23)
4. `3d-visualization-ai-content-trends-2026` — 10 трендов 3D визуализации и AI-контента в 2026 (2026-01-20)
5. `3d-render-vs-photography` — 3D рендер vs фотосъёмка: что выбрать для маркетплейса (2026-01-17)
6. `ai-tools-for-marketplace-content` — Нейросети для контента маркетплейсов: что работает в 2026 (2026-01-14)
7. `3d-visualization-for-marketplaces` — 3D визуализация для маркетплейсов: гайд для селлеров WB и Ozon (2026-01-11)
8. `neural-avatars-for-business` — Нейро-аватары для бизнеса: цифровые ведущие в маркетинге (2026-01-08)
9. `ai-content-cost` — Сколько стоит AI-контент для бизнеса (2026-01-05)

### Контент-план:

Полный контент-план на 10 статей — см. `CONTENT-PLAN-BLOG-SEO.md`

### Добавление новой статьи:

1. Добавить объект `BlogPost` в массив `blogPosts` в `lib/blog.ts`
2. Добавить `<url>` в `public/sitemap.xml`
3. Собрать, закоммитить, запушить, переиндексировать

## SEO

- Google Search Console — верификация в `layout.tsx`
- Яндекс.Вебмастер — верификация: `6b71a9e7e8090ea6`
- JSON-LD схемы: Organization, WebSite, LocalBusiness, Article, FAQPage, Breadcrumb
- RSS-фид: `/feed.xml`
- Trailing slashes включены в конфигурации Next.js

### Статистика и аналитика (обновлено 3 февраля 2026)

**Период:** 3 января - 3 февраля 2026 (31 день)

**Трафик (Яндекс.Метрика):**
- Визиты: 32
- Уникальные пользователи: 10
- Просмотры страниц: 169
- Средняя глубина: 5.28 страниц/визит
- Среднее время: 6 мин 8 сек
- Показатель отказов: 9.38%

**Источники трафика:**
- Прямые заходы: 81.3%
- Переходы по ссылкам: 15.6%
- Поисковые системы: 0% (**критическая проблема**)

**Индексация (Яндекс.Вебмастер):**
- Проиндексировано: 10 из 18 страниц
- SQI (Site Quality Index): 0 (сайт новый)
- Sitemap: обрабатывается корректно (последний доступ 2 февраля 2026)
- Поисковые запросы: 31 запрос, 0 кликов (CTR = 0%)

**Последняя переиндексация:** 3 февраля 2026 — отправлено 17 URL на переобход (первичная), 7 URL (после оптимизации метаданных)

**Оптимизация метаданных:** 3 февраля 2026 — обновлены Title и Description 7 ключевых страниц для повышения CTR. Добавлены ключевые слова: "цена", "маскот", "Москва", "Wildberries", "Ozon". Детали: `SEO-OPTIMIZATION-METADATA.md`

**Детальный отчет:** `SEO-ANALYTICS-REPORT-2026-02-03.md`

## Известные ограничения

- **Static export** (`output: 'export'`) — серверные API-роуты и middleware не работают на продакшене. Вся серверная логика (отправка форм и т.д.) должна быть реализована на клиенте или через внешние сервисы.
