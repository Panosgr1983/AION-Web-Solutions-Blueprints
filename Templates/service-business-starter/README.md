# AION Service Business Starter

## What This Is
A production-ready Vite + React + TypeScript + Tailwind starter template for local service business websites. Based on the AION Service Blueprint v1, tested on real projects.

## What's Included
- **10 baseline sections**: Hero, Why Choose Us, Reviews, Services, Process, FAQ, Service Area, About, Gallery, Testimonials, Contact
- **Responsive**: Mobile-first, tested at all breakpoints
- **Dark/Light mode**: Toggle with localStorage persistence
- **Bilingual**: Greek (default) + English, flag-only toggle
- **SEO-ready**: Schema JSON-LD (LocalBusiness + FAQPage), canonical, OG, sitemap
- **Performance**: WebP images, lazy loading, CLS prevention, fetchpriority
- **Animations**: Framer Motion scroll-triggered reveals
- **Analytics-ready**: GA4 + Clarity snippet placeholders

## Tech Stack
| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 11 |
| i18n | i18next + react-i18next |
| Icons | Lucide React |

## Quick Start
```bash
npm install
npm run dev
```

## Customization
1. **Content**: Edit `/src/i18n/locales/el.ts` (Greek) and `en.ts` (English)
2. **Schema**: Edit `index.html` LocalBusiness JSON-LD
3. **Colors**: Edit `src/index.css` — Tailwind classes use `#6ab04c` as primary
4. **Images**: Replace files in `/public/images/` with your WebP assets
5. **Logo**: Edit `src/components/Logo.tsx` with your logo paths

## Build
```bash
npm run build   # outputs to /dist
```

## Project Structure
```
src/
├── components/     # Header, Footer, Logo, LanguageToggle, ScrollToTop
├── sections/       # Hero, WhyChooseUs, Reviews, Services, Process, FAQ, ServiceArea, About, Gallery, Testimonials, Contact
├── i18n/           # config.ts + locales/ (el.ts, en.ts)
├── App.tsx         # Main layout
├── main.tsx        # Entry point
└── index.css       # Tailwind entry
```

## Blueprint Reference
See `/Blueprints/Service-Business-v1/` for full documentation on:
- Conversion rules
- SEO framework
- Analytics setup
- Launch checklist
