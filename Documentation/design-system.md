# AION Design System — Foundation

> **Status:** Foundation v0.1
> Design tokens extracted from Service Business Blueprint v1.
> Formal v1.0 release targeted after 3+ implementations.

## Brand Colors

### Primary Palette
| Token | Hex | Usage |
|---|---|---|
| `--aion-primary` | `#6ab04c` | Primary actions, highlights, accent elements |
| `--aion-primary-dark` | `#4a8a30` | Hover states, primary CTA bg |
| `--aion-primary-light` | `#8bcf6e` | Lighter variant for borders/bg |

### Neutral Palette
| Token | Hex | Usage |
|---|---|---|
| `--aion-bg-light` | `#ffffff` | Light mode background |
| `--aion-bg-dark` | `#0f172a` | Dark mode background (slate-900) |
| `--aion-surface-light` | `#f8fafc` | Light sections (slate-50) |
| `--aion-surface-dark` | `#1e293b` | Dark sections (slate-800) |
| `--aion-text-light` | `#0f172a` | Light mode text |
| `--aion-text-dark` | `#f1f5f9` | Dark mode text |
| `--aion-text-muted` | `#64748b` | Secondary text (slate-500) |

### Accent Gradients
| Token | Gradient | Usage |
|---|---|---|
| `--aion-gradient-primary` | `#6ab04c → #22c55e` | CTAs, trust elements |
| `--aion-gradient-blue` | `#3b82f6 → #8b5cf6` | Accent cards, some icons |
| `--aion-gradient-warm` | `#f59e0b → #ef4444` | Process steps, highlights |

## Typography

### Font Stack
```
system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
```

### Type Scale
| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `--aion-text-xs` | 0.75rem | 1rem | 500 | Labels, badges |
| `--aion-text-sm` | 0.875rem | 1.25rem | 500 | Nav links, meta |
| `--aion-text-base` | 1rem | 1.5rem | 400 | Body text |
| `--aion-text-lg` | 1.125rem | 1.75rem | 400 | Large body |
| `--aion-text-xl` | 1.25rem | 1.75rem | 400 | Subtitles |
| `--aion-text-2xl` | 1.5rem | 2rem | 600 | Section headings |
| `--aion-text-3xl` | 1.875rem | 2.25rem | 700 | H2 |
| `--aion-text-4xl` | 2.25rem | 2.5rem | 700 | H1 (mobile) |
| `--aion-text-5xl` | 3rem | 1.1 | 700 | H1 (desktop) |
| `--aion-text-6xl` | 3.75rem | 1.1 | 800 | Hero (desktop large) |

## Spacing

| Token | Value |
|---|---|
| `--aion-space-1` | 0.25rem |
| `--aion-space-2` | 0.5rem |
| `--aion-space-3` | 0.75rem |
| `--aion-space-4` | 1rem |
| `--aion-space-6` | 1.5rem |
| `--aion-space-8` | 2rem |
| `--aion-space-12` | 3rem |
| `--aion-space-16` | 4rem |
| `--aion-space-20` | 5rem |

### Section Spacing
- **Section padding**: `py-16` (4rem) mobile, `py-20` (5rem) desktop
- **Section gap**: `gap-8` (2rem) between cards
- **Container**: `max-w-6xl` or `max-w-7xl`, `px-4`
- **Between sections**: Implicit (padding on each section)

## Border Radius
| Token | Value | Usage |
|---|---|---|
| `--aion-radius-sm` | 0.375rem | Small badges, inputs |
| `--aion-radius-md` | 0.5rem | Buttons, form elements |
| `--aion-radius-lg` | 0.75rem | Cards |
| `--aion-radius-xl` | 1rem | Large containers |
| `--aion-radius-full` | 9999px | Pills, avatars |

## Shadows
| Token | Value | Usage |
|---|---|---|
| `--aion-shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle |
| `--aion-shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Cards |
| `--aion-shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Elevated cards, modals |
| `--aion-shadow-glow` | `0 0 20px rgba(106,176,76,0.15)` | Primary glow |

## Glass Effect
```
backdrop-blur-xl bg-white/10 dark:bg-slate-900/50 border border-white/10
```
Usage: header on scroll, hero trust bar, light overlays

## Animations

### Duration
| Token | Value | Usage |
|---|---|---|
| `--aion-duration-fast` | 200ms | Hover, micro-interactions |
| `--aion-duration-normal` | 300ms | Toggles, accordion |
| `--aion-duration-slow` | 500ms | Section reveals |
| `--aion-duration-enter` | 800ms | Hero load animation |

### Easing
- Default: `ease-out` (exits)
- Enter: `cubic-bezier(0.16, 1, 0.3, 1)` (overshoot minimal)
- Exit: `ease-in`

### Component Animation Tokens
| Component | Animation | Duration | Trigger |
|---|---|---|---|
| Hero content | Fade + slide up (y: 20 → 0) | 800ms | Page load |
| Trust bar | Fade + slide up | 800ms, delay 400ms | After hero |
| Sections | Fade + slide up (y: 30 → 0) | 500ms | Scroll (inView) |
| Cards | Staggered fade: each card + 150ms delay | 500ms | Scroll |
| FAQ accordion | Height animation | 300ms | Click |
| Mobile menu | Slide from right | 300ms | Click |
| Button hover | Scale 1.05 | 200ms | Hover |

## Buttons

### Primary CTA
```
bg-[#4a8a30] hover:bg-[#3d7126] text-white font-semibold rounded-md
shadow-lg shadow-[#6ab04c]/25 hover:shadow-[#6ab04c]/40
transition-all duration-300 hover:scale-105
```

### Secondary CTA (Ghost)
```
bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20
text-white font-medium rounded-md transition-all duration-300 hover:scale-105
```

### Phone Pill
```
flex items-center space-x-1.5 px-3 py-1.5
bg-gradient-to-r from-[#6ab04c] to-blue-600 text-white text-sm font-semibold
rounded-full hover:shadow-lg
```

## Component Status
| Component | Status | File |
|---|---|---|
| Header | ✅ v1 | `components/Header.tsx` |
| Logo | ✅ v1 | `components/Logo.tsx` |
| Language Toggle | ✅ v1 | `components/LanguageToggle.tsx` |
| Hero | ✅ v1 | `sections/Hero.tsx` |
| Trust Bar | ✅ v1 | (part of Hero) |
| Why Choose Us | ✅ v1 | `sections/WhyChooseUs.tsx` |
| Reviews Strip | ✅ v1 | `sections/Reviews.tsx` |
| Services | ✅ v1 | `sections/Services.tsx` |
| Process | ✅ v1 | `sections/Process.tsx` |
| FAQ | ✅ v1 | `sections/FAQ.tsx` |
| Service Area | ✅ v1 | `sections/ServiceArea.tsx` |
| About | ✅ v1 | `sections/About.tsx` |
| Gallery | ✅ v1 | `sections/Gallery.tsx` |
| Testimonials | ✅ v1 | `sections/Testimonials.tsx` |
| Contact | ✅ v1 | `sections/Contact.tsx` |
| Footer | ✅ v1 | `components/Footer.tsx` |
| ScrollToTop | ✅ v1 | `components/ScrollToTop.tsx` |

## To Be Formalized (v1.2 / v2.0)
- Form inputs (text, textarea, select, checkbox, radio)
- Button variants (outline, text-only, icon-only, loading)
- Card variants (default, glass, gradient-border, interactive)
- Modal / Dialog
- Toast / Notification
- Navigation variants (desktop, mobile, sticky)
- Filter / Tag component
- Pagination
