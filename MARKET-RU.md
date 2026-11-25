# krasimokna.ru — отличия от krasimokna.by

Проект — **отдельный сайт для России** (Москва и Московская область), не зеркало .by.

## Антидубль для поисковиков

- Собственный домен и canonical (`https://krasimokna.ru`).
- Теги **hreflang** `ru-RU` / `ru-BY` на страницах (см. `buildPageHead` в `src/lib/brand.ts`).
- Другие title/description с упором на Москву и МО.
- Юридические тексты под **152-ФЗ**, не закон РБ 99-З.
- Отдельный телефон, соцсети, Google Ads (через `.env`).
- В подвале — явная ссылка на версию для Беларуси.

## Перед запуском

1. Скопируйте `.env.example` → `.env` и укажите **реальный российский номер** и соцсети.
2. Настройте Telegram/`public/api/lead.php` под бота для .ru.
3. `npm install` → `npm run build` → заливка `dist/`.
4. В [Яндекс.Вебмастер](https://webmaster.yandex.ru) и Google Search Console добавьте **krasimokna.ru** и sitemap.
5. Рекомендуется добавить зеркальные hreflang на **krasimokna.by** (ссылка на .ru).

## Продвижение Москва / МО

- Гео в текстах: `src/lib/site-config.ts` → `MARKET`.
- Для Яндекс.Бизнес и рекламы укажите регион в кабинете; на сайте уже есть JSON-LD с географией.