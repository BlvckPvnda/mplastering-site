# Mplastering — lead capture one-pager

Vite + React + TypeScript. Static output in `dist/` for Netlify, Vercel, Cloudflare Pages, GitHub Pages (with `base: './'`), or any static host.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content & contact

- Copy and services: [`src/constants/content.ts`](src/constants/content.ts)
- Phone, WhatsApp, map link: [`src/constants/contact.ts`](src/constants/contact.ts)

Replace placeholder phone numbers, WhatsApp E.164, email, and external image URLs before launch.

## Product notes

- Multi-step quote form validates in the browser and ends on a **thank-you** state (no server submit). WhatsApp prefill is offered on the success screen.
- Reviews are **static** carousel data until you add an embed or backend.

See [Mplastering V1.MD](Mplastering%20V1.MD) for the full implementation checklist.
