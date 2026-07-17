# لُقمة · Bitewise

**دليلك المبسّط لعلم التغذية والطعام الصحي — بالعربية والإنجليزية.**
_Your simple, bilingual (Arabic-first) guide to food & nutrition._

### ▶ Live: **[edriso.github.io/bitewise](https://edriso.github.io/bitewise/)**

A responsive React app that teaches nutrition in plain language for all ages:
what calories, protein, carbs, fat, fiber, sugar, water, vitamins, and minerals
really are — with everyday examples and cases. It includes a searchable food
library, health calculators, dark/light themes, and full right-to-left (RTL)
support with Arabic as the default language.

## Features

- 🌍 **Bilingual & RTL** — full Arabic (default) and English, switchable with one tap. Arabic is written in simple Modern Standard Arabic so all ages can follow.
- 📚 **Learn** — 9 illustrated lessons on the key nutrition concepts, each with _what / why / how much / where to find it_, real examples, and a quick tip.
- 🥗 **Food library** — 77+ foods with nutrition per 100g (calories, protein, carbs, fat, fiber, sugar), searchable and filterable by category, with a visual macro bar.
- 🧮 **Health tools** — Body Mass Index, daily calorie needs (Mifflin–St Jeor + activity + goal), and macro split calculators.
- 🌗 **Dark / light themes** — remembered across visits, respects system preference on first visit.
- 📱 **Responsive** — designed mobile-first, works well on every screen size.

## Trusted sources

Facts and figures follow globally recognized authorities: the World Health
Organization (WHO), USDA FoodData Central, the Dietary Guidelines for Americans,
the NIH Office of Dietary Supplements, Harvard's Nutrition Source, and Mayo Clinic.

> ⚠️ Educational content only — not a substitute for medical or dietary advice.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) build tooling
- [Tailwind CSS v4](https://tailwindcss.com) (theme tokens, dark mode, RTL logical properties)
- [React Router 7](https://reactrouter.com)
- [lucide-react](https://lucide.dev) icons
- Fonts: **Cairo** (Arabic) & **Plus Jakarta Sans** (Latin)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build for production
npm run preview  # preview the production build
npm run lint     # lint with oxlint
```

## Project structure

```
src/
  lib/          # types, theme + i18n contexts, UI strings, calculators
  data/         # nutrients (lessons), foods, sources
  components/   # layout, navbar, footer, toggles, cards, macro bar
  pages/        # Home, Learn, LearnDetail, Foods, Tools, About, NotFound
```

To add a food, append to `src/data/foods.ts`. To add a lesson, append to
`src/data/nutrients.ts`. All UI text lives in `src/lib/strings.ts` as `{ ar, en }` pairs.
