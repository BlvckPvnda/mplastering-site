# Mplastering — Implementation Plan V1

**Source:** Product Requirements Document (PRD) V2 (one-pager optimised)  
**Scope:** Frontend only — static build, no backend, no Facebook data API  
**Stack:** Vite + React + TypeScript (output `dist/` for flexible static hosting)

---

## 1. Verification (correctness checklist)

| PRD expectation | Planned implementation | Status |
|-----------------|-------------------------|--------|
| Section order §2 | Hero → Trust bar → Services (3 cards) → Before/after → About (Meet Glen) → Reviews → Multi-step quote → Footer | Correct |
| Services §3 | Internal Skimming, Exterior Rendering, Wall Restoration with stated taglines | Correct |
| Meet Glen §4 | Owner-operated, punctual/helpful tone, family-friendly disruption wording | Correct (copy in constants) |
| UI §5 | High-contrast CTAs, generous whitespace, sticky mobile navigation, persistent “Request estimate” | Correct |
| Footer & SEO §6 | Anchor `#` IDs + smooth scroll, visible towns/counties list, WhatsApp + click-to-call | Correct |
| “Dynamic Facebook reviews” §2 | **Interpretation:** animated/static-data carousel — no live Graph API without backend | Acknowledged deviation; content in `content.ts`, swappable later |

**Confirmed product decisions:** flexible static hosting; quote form = validated multi-step UI ending in **success state only** (no submit endpoint).

---

## 2. Implementation phases

### Phase A — Scaffold

1. Create Vite React TS app in this folder (`npm create vite@latest` → React + TypeScript).
2. Add `src/styles/global.css`: design tokens (`--bg`, `--surface`, `--text`, `--accent`, spacing scale), base typography, `scroll-behavior: smooth`, `scroll-margin-top` on section anchors for fixed header.
3. Optional: set `base` in `vite.config.ts` to `'./'` if deploying to GitHub Pages subpath.

### Phase B — Shell & navigation

1. `SiteHeader`: logo/text “Mplastering”, anchor links to all section IDs, sticky on scroll, mobile-friendly (hamburger or compact row).
2. `MobileCtaBar` (or FAB): fixed bottom on small breakpoints — primary “Request estimate” → `#quote`; ensure safe-area padding for notched phones.
3. `Button` component: primary/secondary variants, `:focus-visible` rings, sufficient colour contrast.

### Phase C — Sections (in order)

Implement one component per block under `src/sections/`:

1. **Hero** — value prop (cleanliness + rapid response), primary CTA to `#quote`, secondary to `#services` or `tel:`.
2. **TrustBar** — certification placeholders + “5-star Facebook rated” (icon/text); replace with real assets when available.
3. **Services** — three cards: Skimming, Rendering, Restoration; PRD taglines; short bullets from PRD table.
4. **BeforeAfter** — accessible compare slider (range input or drag handle) + `alt` text; placeholder images until real photos exist.
5. **About** — “Meet Glen”: experience, owner-operated, family-friendly scheduling.
6. **Reviews** — carousel: prev/next, keyboard, `prefers-reduced-motion` respected; static quotes + stars in constants.
7. **Quote** — multi-step form: e.g. (1) name/email/phone (2) service + message (3) thank-you panel only — **no** `fetch` to server.
8. **Footer** — service area paragraph (town names for crawlers), map link or iframe stub, `tel:` + `wa.me`, social placeholders.

### Phase D — Content & contact constants

- `src/constants/contact.ts` — `PHONE_DISPLAY`, `PHONE_TEL`, `WHATSAPP_E164` (for `wa.me`), optional `MAP_QUERY` or embed URL.
- `src/constants/content.ts` — services, trust items, reviews array, footer towns, hero/SEO meta strings.

### Phase E — Polish & ship

1. Meta: `<title>`, description in `index.html` aligned to local plastering lead-gen.
2. Lazy-load below-fold images where applicable.
3. README: `npm install`, `npm run dev`, `npm run build`, deploy `dist/` to Netlify/Vercel/Cloudflare Pages/etc.

---

## 3. Suggested file map

```
index.html
vite.config.ts
package.json
README.md
src/main.tsx
src/App.tsx
src/styles/global.css
src/constants/contact.ts
src/constants/content.ts
src/components/Button.tsx
src/components/SiteHeader.tsx
src/components/MobileCtaBar.tsx
src/components/ReviewCarousel.tsx
src/components/BeforeAfterSlider.tsx
src/components/MultiStepQuoteForm.tsx
src/sections/HeroSection.tsx
src/sections/TrustBarSection.tsx
src/sections/ServicesSection.tsx
src/sections/BeforeAfterSection.tsx
src/sections/AboutSection.tsx
src/sections/ReviewsSection.tsx
src/sections/QuoteSection.tsx
src/sections/FooterSection.tsx
```

---

## 4. Section anchor IDs (PRD smooth scroll)

| Section   | Suggested `id`   |
|-----------|------------------|
| Hero      | `hero`           |
| Trust     | `trust`          |
| Services  | `services`       |
| Before/after | `before-after` |
| About     | `about`          |
| Reviews   | `reviews`        |
| Quote     | `quote`          |
| Footer    | `footer`         |

---

## 5. Acceptance criteria (V1 done =)

- [ ] All sections appear in PRD order on one page.
- [ ] Header links scroll smoothly to each section; focus not lost in a way that breaks keyboard users.
- [ ] Mobile: persistent “Request estimate” visible and tappable; thumb-friendly tap targets (min ~44px).
- [ ] Primary buttons meet high-contrast intent (test light/dark if you add dark mode later — V1 can be light-only).
- [ ] Before/after control is operable with keyboard and has non-empty labels.
- [ ] Quote form blocks advance with validation; final state is success UI only (no backend).
- [ ] Footer includes visible local place names + working `tel:` and `wa.me` once you paste real numbers (placeholders OK for dev).
- [ ] `npm run build` succeeds; `dist/` can be uploaded to a static host.

---

## 6. Post-V1 (out of scope unless requested)

- Formspree / Getform / email API for real lead capture.
- Official Facebook reviews embed or server-cached feed.
- CMS or MDX for non-dev copy edits.
- Blog / multi-page SEO expansion.

---

*Document version: 1.0 — matches agreed frontend-only V1 plan.*
