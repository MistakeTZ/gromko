# 🎤🍸 #ГРОМКО — Dark Neon Nightlife & Karaoke Experience

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-4.21-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Performance](https://img.shields.io/badge/PageSpeed-100%2F100-00E676?style=flat&logo=google-lighthouse&logoColor=white)](#-100-pagespeed-performance)

Официальный веб-сайт премиального караоке-бара и ночного клуба **#ГРОМКО** (г. Иваново, ул. 10 Августа, 43).  
Интерфейс спроектирован в эстетике **Dark Neon** и следует концептуальному манифесту:
> **«Музыка → свет → люди → алкоголь → еда → пение → ночь»**

---

## 📸 Галерея интерфейса (UI Showcase)

| Главный экран (Hero) и Live-статус работы | Недельное расписание и акции |
| :---: | :---: |
| ![Hero Section](screenshots/hero-open-status.webp) | ![Weekly Deals](screenshots/weekly-schedule-deals.webp) |

| Меню кухни и хиты заведения | Барная карта и авторские коктейли |
| :---: | :---: |
| ![Kitchen Menu](screenshots/kitchen-menu-preview.webp) | ![Bar Cocktails](screenshots/bar-card-cocktails.webp) |

| Асимметричная галерея и Lightbox | Интерактивная бронь столов (Desktop) |
| :---: | :---: |
| ![Atmospheric Gallery](screenshots/atmospheric-masonry-gallery.webp) | ![Table Booking](screenshots/table-booking-scheduler.webp) |

| Полноэкранный каталог кухни | Барное меню и коктейльная карта |
| :---: | :---: |
| ![Full Menu Modal](screenshots/full-menu-modal.webp) | ![Bar Menu Modal](screenshots/bar-menu-modal.webp) |

| Тёмная интерактивная карта и контакты | Мобильная навигация (Drawer) |
| :---: | :---: |
| ![Contacts & Map](screenshots/contacts-dark-map.webp) | ![Mobile Navigation](screenshots/mobile-navigation-drawer.webp) |

### ⚡ 100% PageSpeed Performance
![PageSpeed Performance](screenshots/pagespeed-score-100.webp)

---

## ✨ Ключевые возможности и функциональность

### 🎨 Дизайн и UI/UX
- **Dark Neon палитра:** 80% глубокий графит (`#050507`, `#09090D`, `#101017`) + 20% неоновые акценты (`#FF00AC` Pink, `#08CEFD` Cyan, `#7C3CFF` Violet) с динамическими радиальными свечениями (*glow*), стеклянными карточками (*glassmorphism*) и неоновыми градиентами.
- **Премиальная типографика:** `@fontsource-variable/unbounded` для выразительных клубных заголовков и `@fontsource-variable/manrope` для идеальной читаемости текстов.
- **Адаптивность (Mobile First):** Отдельно проработанный UX для мобильных устройств (свайп-карусели, 4-шаговый визард бронирования, плавающая sticky-кнопка CTA, выдвижное меню).

### 🚀 Разделы и страницы
1. **Hero-секция:** Полноэкранный визуальный блок с живым расчетом рабочего статуса (`● ОТКРЫТО СЕЙЧАС` / `○ ЗАКРЫТО`) в зависимости от текущего дня недели и времени.
2. **Neon Marquee:** Плавная бегущая неоновая строка между ключевыми блоками.
3. **«Этой неделей в #ГРОМКО» (Акции и расписание):**
   - *Desktop:* 7-колоночный календарь недели (ПН—ВС) с раскрытием программы дня и кнопкой мгновенной брони.
   - *Mobile:* Горизонтальный свайп недели с крупной активной карточкой дня.
4. **Атмосфера:** Манифест-блок с клубными акцентами и ценностями заведения.
5. **Фотогалерея:**
   - *Desktop:* Асимметричный masonry-layout с ритмическими словами `SING`, `DANCE`, `DRINK`, `REPEAT`.
   - *Mobile:* Touch-карусель со счетчиком слайдов `01 / 08`.
   - **Полноэкранный Lightbox:** Просмотр фотографий в высоком качестве с клавиатурной навигацией (`Esc`, `←`, `→`).
6. **Меню кухни и Барная карта:**
   - Превью хитов кухни и авторских коктейлей на главной странице.
   - Отдельная страница меню (`/menu`) с переключением табов `[ Кухня ] / [ Бар ]`.
   - Фильтрация по категориям (Закуски, Бургеры, Гриль, Сеты, Салаты, Десерты, Коктейли, Вино, Крепкое и др.) и живой поиск по названию/описанию.
7. **Верификация возраста (18+):** Модальное окно подтверждения возраста при входе в раздел барного меню с сохранением выбора в `localStorage`.
8. **Двухрежимная система бронирования:**
   - *Desktop:* Интерактивная матрица слотов времени (`Свободно` / `Занято` / `Выбрано`), выбор даты, селектор количества гостей и мгновенная валидация.
   - *Mobile:* 4-шаговый визард (`1. Дата` → `2. Время` → `3. Гости` → `4. Контакты`) с индикатором прогресса и кнопкой шага назад.
   - Модальное окно подтверждения с генерацией уникального номера брони (`GROMKO-XXXXXX`).
9. **Контакты и Тёмная карта:**
   - Кастомная темная карта с неоновым маркером локации.
   - Быстрые действия: звонок по клику, построение маршрута в Яндекс.Картах, ссылки на Telegram / VK / WhatsApp.
10. **Политика конфиденциальности (`/privacy`):** Юридически выверенный документ в соответствии с 152-ФЗ.

---

## 🛠 Технологический стек

| Область | Технологии |
| :--- | :--- |
| **Frontend** | [React 19](https://react.dev/), [TypeScript 5.7](https://www.typescriptlang.org/), [Vite 6](https://vitejs.dev/) |
| **Стилизация** | [Tailwind CSS 3.4](https://tailwindcss.com/), [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer), `clsx`, `tailwind-merge` |
| **Иконки и Шрифты** | [Lucide React](https://lucide.dev/), `@fontsource-variable/unbounded`, `@fontsource-variable/manrope` |
| **Backend API** | [Node.js](https://nodejs.org/) (native TypeScript strip-types), [Express 4.21](https://expressjs.com/), [CORS](https://github.com/expressjs/cors) |
| **Оптимизация** | Modern WebP Images, Zero-dependency lightweight SPA Router |

---

## 📁 Структура проекта

```
gromko/
├── public/                      # Статические ресурсы и иконки
├── screenshots/                 # Скриншоты интерфейса для документации
├── server/
│   └── index.ts                 # Express REST API сервер
├── src/
│   ├── components/
│   │   ├── atmosphere/          # Манифест-блок атмосферы
│   │   ├── booking/             # Формы бронирования (Desktop + Mobile визард)
│   │   ├── common/              # NeonBadge, NeonButton, Marquee, Modal, AgeVerification
│   │   ├── contacts/            # Контакты и темная карта
│   │   ├── gallery/             # Галерея (Masonry, Carousel, Lightbox)
│   │   ├── hero/                # Главный экран со статусом работы
│   │   ├── layout/              # Header, Footer, StickyMobileCTA
│   │   ├── menu/                # Превью меню кухни и барной карты
│   │   └── schedule/            # Недельное расписание и акции
│   ├── context/
│   │   └── RouterContext.tsx    # Клиентский SPA-роутер (главная, меню, политика)
│   ├── data/
│   │   └── index.ts             # База данных: блюда, бар, расписание, контакты, галерея
│   ├── pages/
│   │   ├── HomePage.tsx         # Главная страница
│   │   ├── MenuPage.tsx         # Страница полного меню кухни и бара (с фильтрами и 18+)
│   │   └── PrivacyPage.tsx      # Страница политики конфиденциальности
│   ├── types/
│   │   └── index.ts             # TypeScript типы и интерфейсы
│   ├── App.tsx                  # Главный компонент приложения и макет
│   ├── index.css                # Неоновые стили, кастомные утилиты и анимации
│   └── main.tsx                 # Точка входа React
├── index.html                   # HTML-каркас с мета-тегами
├── package.json                 # Скрипты и зависимости проекта
├── tailwind.config.js           # Цветовая палитра и настройки Tailwind
├── tsconfig.json                # Конфигурация TypeScript
└── vite.config.ts               # Конфигурация Vite и прокси для /api
```

---

## ⚡ Быстрый старт

### Требования
- [Node.js](https://nodejs.org/) `>= 20.0.0` (или [Bun](https://bun.sh/))

### 1. Клонирование и установка зависимостей
```bash
git clone https://github.com/MistakeTZ/gromko.git
cd gromko
npm install
# или
bun install
```

### 2. Запуск в режиме разработки

В режиме разработки рекомендуется запустить фронтенд и бэкенд параллельно:

```bash
# Запуск фронтенда (Vite Dev Server на http://localhost:3000)
npm run dev

# В отдельном терминале: запуск API сервера (Express на http://localhost:3001)
npm run server
```

> **Примечание:** Vite настроен с автоматическим проксированием запросов `/api/*` на порт `3001`.

### 3. Сборка для продакшена
```bash
# Проверка типов TypeScript и компиляция бандла
npm run build

# Предпросмотр продакшен-сборки
npm run preview
```

---

## 🔌 API Спецификация (Express Backend)

Бэкенд предоставляет REST API для получения данных и отправки бронирований:

| Метод | Эндпоинт | Описание |
| :--- | :--- | :--- |
| `GET` | `/api/info` | Информация о заведении (адрес, телефон, график, соцсети) |
| `GET` | `/api/promotions` | Расписание акций и событий по дням недели |
| `GET` | `/api/menu` | Полный список блюд кухни с категориями и тегами |
| `GET` | `/api/bar` | Барная карта и коктейли |
| `GET` | `/api/gallery` | Список фотографий и тегов галереи |
| `GET` | `/api/slots?date=YYYY-MM-DD` | Доступность временных слотов для указанной даты |
| `POST` | `/api/booking` | Создание новой брони столика |

### Пример тела запроса для `POST /api/booking`:
```json
{
  "date": "2026-09-05",
  "time": "21:00",
  "guests": 4,
  "name": "Александр",
  "phone": "+7 (999) 123-45-67",
  "comment": "Столик ближе к сцене, день рождения"
}
```

### Пример ответа сервера:
```json
{
  "success": true,
  "message": "Бронирование успешно подтверждено!",
  "data": {
    "id": "GROMKO-A9F3K2",
    "createdAt": "2026-09-01T18:30:00.000Z",
    "date": "2026-09-05",
    "time": "21:00",
    "guests": 4,
    "name": "Александр",
    "phone": "+7 (999) 123-45-67",
    "comment": "Столик ближе к сцене, день рождения",
    "status": "confirmed"
  }
}
```

---

## ⚙️ Управление контентом и кастомизация

Все ключевые данные, меню, акции и тексты централизованы в одном файле:  
👉 **`src/data/index.ts`** (или импорт из **`src/data`**)

- **Изменение позиций меню:** отредактируйте массив `MENU_ITEMS`.
- **Изменение коктейлей и бара:** отредактируйте массив `BAR_ITEMS`.
- **Изменение расписания недели и акций:** отредактируйте массив `WEEK_SCHEDULE`.
- **Добавление фото в галерею:** отредактируйте массив `GALLERY_PHOTOS`.
- **Контакты, режим работы и ссылки на соцсети:** отредактируйте объект `VENUE_INFO`.
- **Цветовая палитра и неоновые стили:** отредактируйте `tailwind.config.js` и `src/index.css`.

---

## 📄 Лицензия

Проект разработан для караоке-бара **#ГРОМКО**. Все права защищены © 2026.
