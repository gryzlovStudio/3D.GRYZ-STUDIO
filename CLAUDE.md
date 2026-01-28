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

Каждое изменение файлов проекта СРАЗУ проходит полный цикл деплоя. Не ждать отдельного подтверждения, не спрашивать "запушить?". Изменил код = деплой:

1. `npm run build` — проверить сборку
2. `git add <файлы>` — добавить изменённые файлы
3. `git commit` — коммит с описательным сообщением
4. `git push` — пуш в main (триггерит деплой на GitHub Pages)
5. **Переиндексация в Яндекс.Вебмастере** — отправить изменённые URL через `/recrawl/queue`

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

### Текущие статьи (5 шт.):

1. `3d-visualization-for-marketplaces` — 3D визуализация для маркетплейсов: гайд для селлеров WB и Ozon (2026-01-28)
2. `neural-avatars-for-business` — Нейро-аватары для бизнеса: цифровые ведущие в маркетинге (2026-01-28)
3. `ai-content-cost` — Сколько стоит AI-контент для бизнеса (2026-01-28)
4. `3d-product-visualization-cost` — Стоимость 3D визуализации (2026-01-19)
5. `3d-mascots-for-brands` — 3D-маскоты для брендов (2026-01-17)

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

## Известные ограничения

- **Static export** (`output: 'export'`) — серверные API-роуты и middleware не работают на продакшене. Вся серверная логика (отправка форм и т.д.) должна быть реализована на клиенте или через внешние сервисы.
