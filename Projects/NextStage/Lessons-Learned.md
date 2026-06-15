# Lessons Learned — NextStage

## What Worked
- **Single-page architecture** with sections → fast load, easy navigation, one URL to optimize
- **Real hero photo** → client hesitant at first, result was stronger than any stock photo
- **Compact header** → smaller nav text (`text-sm` + `whitespace-nowrap`) prevents Greek word wrapping
- **Logo variants** → dark logo in light mode, white logo in dark mode — simple CSS swap via `block dark:hidden`
- **Trust bar format** → single glass container with 3 metrics + dividers, cleaner than 3 separate cards
- **Service area section** → one section, no landing pages, natural copy. Client's SEO consultant validated
- **FAQ question for service area** → natural local SEO signal without spam
- **areaServed schema** → low effort, high local SEO value
- **Flag-only language toggle** → cleaner header, sufficient for bilingual (EL/EN)
- **Green highlight on trust word** → "Εγγύηση" in accent color draws attention to the key promise

## What Didn't Work
- **Initial project comparison** → spent too long comparing two codebases. Next time: choose one immediately
- **Missing client assets at start** → logo, photos, content delayed production. The Client Intake Questionnaire would have saved 2-3 days
- **Over-engineering early** → first hero version had 3 separate trust cards, then simplified to 1 bar. Always start simpler
- **Dark mode defaults** → initially defaulted to system preference. Client wanted light mode as default. Fixed in config
- **Stock images** → services section briefly used Pexels. Real photos perform better. Never start with stock

## Unexpected Findings
- **GBP > Website SEO** for local service queries. Client had 110 Google Reviews — that's worth more than 20 blog posts
- **Exit intent + newsletter don't fit** this business type. Transactional intent, not nurture. Cleaner to omit
- **Case studies** are the biggest gap but require real client material. Cannot fabricate — must wait for client to provide
- **The blueprint became more valuable than the project itself** — the reusable framework is the real asset

## Blueprint Changes (Triggers for v1.1+)
- [ ] Add `aggregateRating` schema when review count is substantial
- [ ] Consider adding `review` schema markup for individual testimonials
- [ ] Lighthouse > 90 Performance target requires preconnect + hero image optimization (not done in v1)
- [ ] Starter template should have a `placeholder` image system so the site looks complete even before client provides assets

## Future Improvements
- Pre-launch performance budget (max JS size, max image weight)
- Automated Lighthouse CI check before deploy
- A/B testable CTA variants
- Google LSA (Local Services Ads) integration guide
- Standardized monthly report template for retainer clients
