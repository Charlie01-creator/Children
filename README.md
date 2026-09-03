# M$F Children Foundation — Website

React + Vite + Tailwind CSS + Framer Motion frontend for a Uganda-based children's nonprofit.

## What's built

- **7 pages**: Home, About, Programs, Impact Stories (with category filtering), Donate, Updates, Contact
- Shared `Navbar` / `Footer` with newsletter signup UI
- Reusable `DonationWidget` (amount selector, one-time/monthly toggle, payment method picker) used on both Home and Donate
- Animated impact-stats counters (Framer Motion `useInView`)
- Mobile-first, responsive, keyboard-accessible (visible focus rings, `prefers-reduced-motion` respected)
- Basic SEO: meta tags, Open Graph tags, NGO structured data (JSON-LD) in `index.html`
- All content lives in `src/data/content.js` — edit copy/numbers there without touching components

## What's intentionally NOT built (and why)

This is a **frontend-only** deliverable, as requested. Nothing here is production-ready to actually move money or send email yet:

- `DonationWidget.jsx` — the submit handler is a stub (`alert(...)`). No payment processor is wired up.
- `Footer.jsx` newsletter form and `Contact.jsx` form — both just flip local state to a "success" UI. Nothing is actually sent anywhere.
- Google Maps embed on the Contact page is a placeholder `div`.
- All photography is a placeholder block — see "Images" below.

## Getting it running locally

```bash
npm install
npm run dev
```

Requires Node 18+. This could not be installed/tested inside this sandbox (no network access here), but the code has been syntax- and import-checked with esbuild against the full dependency graph, so `npm install && npm run dev` should work as-is.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: Vercel auto-detects **Vite** — no config needed. Build command `vite build`, output directory `dist`.
4. Add a custom domain once you have one; Vercel issues SSL automatically.
5. Every push to `main` redeploys automatically.

## Recommended backend / integrations (next steps)

**Donations (the highest-priority integration):**
- **Flutterwave** or **Pesapal** are the standard choices for Uganda — both support Mobile Money (MTN/Airtel), local bank transfer, and international cards in one integration, which matches the brief's three payment methods. Stripe alone won't cover Mobile Money.
- Flow: donation form → your own lightweight API route (e.g. a Vercel serverless function) → Flutterwave/Pesapal checkout → webhook back to your API to confirm payment → store the donation record → send a receipt email.
- **Do not** try to take card numbers directly in this frontend — always redirect to/embed the processor's hosted checkout. PCI compliance is not something to build yourself.

**Newsletter:** Buttondown, Mailchimp, or ConvertKit all have simple REST APIs — swap the `alert`/local-state stub in `Footer.jsx` for a `fetch()` to their subscribe endpoint.

**Contact form:** Formspree or Resend (with a small serverless function) are the least-effort options that don't require standing up your own mail server.

**Blog/Updates as real CMS:** the `updates` array in `content.js` is structured so it maps cleanly onto a headless CMS later (Sanity, or even a Markdown-in-repo approach) without changing the page component.

**Donor dashboard (future):** the data shapes here (donation amount, frequency, method) are a reasonable starting schema for a `donations` table once you add auth (e.g. Clerk or Auth.js) and a database (Postgres via Supabase/Neon).

## Images

Every photo is currently a labelled placeholder `div` (search the codebase for "placeholder" to find each spot). Before launch, replace these with real photography of children and communities that shows dignity and agency — the brief is explicit about avoiding imagery that makes children look helpless, and stock "poverty" photography reads as exactly that to donors. Real photos from your own programs, with consent properly obtained (especially for anything involving children), will do far more for trust than any stock library.

## Accessibility & performance notes

- Color contrast has been kept in mind (forest-dark text on white/sand backgrounds), but re-check with a contrast checker once real photography is in and backgrounds change.
- Framer Motion animations are limited to entrance moments and respect `prefers-reduced-motion`.
- Once real images are added, serve them via an optimized pipeline (Vercel's built-in image optimization, or `next/image`-equivalent if you ever migrate to Next.js) — unoptimized hero photography is the single most common cause of poor Lighthouse scores on sites like this.
