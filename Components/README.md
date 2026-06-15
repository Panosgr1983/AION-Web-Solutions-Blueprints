# AION Component Library

> **Status:** v1.0 — Documentation only
> Reusable component extraction planned for v1.2.
> Components currently live in `Templates/service-business-starter/src/`.

## Directory Structure (Planned)
```
Components/
├── Header/
│   ├── Header.tsx
│   ├── Logo.tsx
│   ├── LanguageToggle.tsx
│   └── README.md
├── Hero/
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   └── README.md
├── Sections/
│   ├── WhyChooseUs.tsx
│   ├── Reviews.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── FAQ.tsx
│   ├── ServiceArea.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
├── Footer/
│   ├── Footer.tsx
│   └── README.md
└── UI/
    ├── ScrollToTop.tsx
    └── README.md
```

## Current Components

### Layout
| Component | File | State | Props |
|---|---|---|---|
| Header | `components/Header.tsx` | ✅ Stable | `toggleDarkMode`, `darkMode` |
| Logo | `components/Logo.tsx` | ✅ Stable | `white?: boolean` |
| LanguageToggle | `components/LanguageToggle.tsx` | ✅ Stable | none |
| Footer | `components/Footer.tsx` | ✅ Stable | none |
| ScrollToTop | `components/ScrollToTop.tsx` | ✅ Stable | none |

### Sections
| Component | File | State | Notes |
|---|---|---|---|
| Hero | `sections/Hero.tsx` | ✅ Stable | Includes TrustBar |
| WhyChooseUs | `sections/WhyChooseUs.tsx` | ✅ Stable | 6 items grid |
| Reviews | `sections/Reviews.tsx` | ✅ Stable | Star rating + Google link |
| Services | `sections/Services.tsx` | ✅ Stable | Cards with icons |
| Process | `sections/Process.tsx` | ✅ Stable | 4 steps + connector line |
| FAQ | `sections/FAQ.tsx` | ✅ Stable | Accordion, 9 items |
| ServiceArea | `sections/ServiceArea.tsx` | ✅ Stable | Single section |
| About | `sections/About.tsx` | ✅ Stable | Stats + description |
| Gallery | `sections/Gallery.tsx` | ✅ Stable | Grid + lightbox modal |
| Testimonials | `sections/Testimonials.tsx` | ✅ Stable | Client quotes |
| Contact | `sections/Contact.tsx` | ✅ Stable | Form + info + hours |

## Usage
All components are currently embedded in `Templates/service-business-starter/src/`. To use:

```bash
# Clone the starter template
git clone https://github.com/Panosgr1983/AION-Web-Solutions-Blueprints.git
# Copy src/ to your project
cp -r Templates/service-business-starter/src ./your-project/src
```

## Component Principles
1. **Self-contained**: Each component imports its own dependencies
2. **i18n-ready**: All text uses `t()` from react-i18next
3. **Responsive**: Mobile-first, tested at all breakpoints
4. **Theme-aware**: Works in both light and dark mode
5. **Accessible**: Proper aria labels, keyboard navigation, semantic HTML

## Extraction Roadmap
| Phase | When | What |
|---|---|---|
| v1.0 | Current | Documentation + links to template files |
| v1.2 | After 3+ projects | Standalone files with props, screenshots, usage examples |
| v2.0 | After 5+ projects | Published as npm package or submodule |
