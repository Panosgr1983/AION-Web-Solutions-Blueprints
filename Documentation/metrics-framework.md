# Metrics Framework — AION Web Solutions

## Purpose
Standardized KPI tracking for every project. Data from all projects feeds into:
- Client reporting (monthly/quarterly)
- Portfolio case studies
- Framework improvement decisions
- Benchmarking across verticals

## Timeline

### Pre-Launch (Baseline)
Capture before the site goes live.

| Metric | Tool | Notes |
|---|---|---|
| Lighthouse Performance | PageSpeed Insights | Mobile + Desktop |
| Lighthouse Accessibility | PageSpeed Insights | Mobile + Desktop |
| Lighthouse SEO | PageSpeed Insights | Mobile + Desktop |
| Page load time (ms) | PageSpeed / WebPageTest | First Contentful Paint + Largest Contentful Paint |
| Cumulative Layout Shift | PageSpeed Insights | Target < 0.1 |
| Mobile responsiveness | Manual check | All breakpoints |
| Google Reviews count | GBP | Baseline for growth tracking |
| Existing organic traffic | Search Console (if available) | 30-day lookback |

### Post-Launch: Week 1
| Metric | Tool | Success Criteria |
|---|---|---|
| All Lighthouse targets met | PageSpeed Insights | Perf > 90, A11y > 95, SEO > 95 |
| GA4 receiving events | GA4 Realtime Report | At least 1 event |
| Clarity recording sessions | Clarity Dashboard | Sessions recording |
| Search Console indexing | Search Console | Homepage indexed |
| Broken links / console errors | Manual + browser console | 0 |

### Post-Launch: Month 1
| Metric | Tool | Notes |
|---|---|---|
| Total impressions | Search Console | Compare to baseline if available |
| Total clicks | Search Console | |
| Average CTR | Search Console | |
| Average position | Search Console | Top 10 queries |
| Organic sessions | GA4 | |
| Bounce rate | GA4 | |
| Avg session duration | GA4 | |
| Phone calls (if tracked) | GA4 event or call tracking | |
| Contact form submissions | GA4 event or form backend | |
| GBP direction requests | GBP Insights | |
| GBP phone calls | GBP Insights | |
| New Google Reviews | GBP | Count + sentiment |
| Top 3 landing pages | GA4 | |
| Top 3 search queries | Search Console | |

### Post-Launch: Month 3
All Month 1 metrics, plus:

| Metric | Notes |
|---|---|
| Month-over-month traffic growth | Positive trend expected |
| New vs returning visitors | GA4 |
| Pages per session | Engagement metric |
| Scroll depth (key sections) | Clarity |
| Click heatmaps insights | Clarity |
| CTA click-through rate | GA4 event |
| Conversion rate (form submissions / visitors) | GA4 |

## Project KPI Template

```
# KPIs — [Project Name] — [Month]

## Traffic
- Sessions: [value] ([+/-]% vs previous)
- Users: [value]
- Pageviews: [value]
- Bounce Rate: [value]%

## Search Console
- Impressions: [value]
- Clicks: [value]
- Avg CTR: [value]%
- Avg Position: [value]

## Conversions
- Form Submissions: [value]
- Phone Calls: [value]
- GBP Direction Requests: [value]

## Reviews
- Total Reviews: [value]
- New This Month: [value]

## Performance (Production)
- Lighthouse Performance: [value]
- Lighthouse A11y: [value]
- Lighthouse SEO: [value]
- LCP: [value]ms
- CLS: [value]
```

## Benchmark Targets

| Metric | Good | Needs Work | Poor |
|---|---|---|---|
| Lighthouse Performance | > 90 | 70-90 | < 70 |
| Lighthouse A11y | > 95 | 80-95 | < 80 |
| Lighthouse SEO | > 95 | 80-95 | < 80 |
| Bounce Rate | < 50% | 50-70% | > 70% |
| Avg Session Duration | > 2min | 1-2min | < 1min |
| CTR (organic) | > 5% | 2-5% | < 2% |
| Avg Position | < 10 | 10-20 | > 20 |
| MoM Traffic Growth | > 10% | 0-10% | Negative |
| GBP Review Growth (monthly) | > 5 | 2-5 | < 2 |

## Reporting Cadence
| When | What | To Whom |
|---|---|---|
| Week 1 | Quick check-in (everything working?) | Client |
| Month 1 | First metrics summary (1 page) | Client |
| Month 3 | Full performance report + recommendations | Client + internal archive |
| Every 6 months | Benchmark across all active projects | Internal |

## Tools Required
- [ ] Google Analytics 4 (GA4) — property per project
- [ ] Google Search Console — property per domain
- [ ] Microsoft Clarity — project per site
- [ ] Google Business Profile — access for Insights
- [ ] PageSpeed Insights — for Lighthouse snapshots
