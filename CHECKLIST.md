# New Client Checklist — Muwit Astro Starter

Steps to launch a new client website from this starter. Edit **config /
content / theme / images** only — never the components.

## 1. Setup
- [ ] Copy the template: `cp -R muwit-astro-starter <client>` (or `rsync -a --exclude node_modules --exclude dist muwit-astro-starter/ <client>/`)
- [ ] `cd <client> && npm install`
- [ ] `cp .env.example .env`

## 2. Configuration (`src/config/`)
- [ ] **`site.ts`** — name, domain, logo, locales, company (name/legalName/vatId), muwit, tracking (gtmId/gaId), SEO fallbacks
- [ ] **`contact.ts`** — phone/phoneHref, email/emailHref, address, googleMapsUrl, googleMapsEmbedUrl, openingHours
- [ ] **`theme.ts`** — colors + fonts
- [ ] **`menu.ts`** — navigation per locale (DE/IT/EN)
- [ ] **`fixedButtons.ts`** — sticky CTA buttons per locale
- [ ] **`social.ts`** — social links (empty = hidden)
- [ ] **`partners.ts`** — partner logos (empty = section hidden)
- [ ] **`seo.ts`** — per-page, per-locale title/description/image

## 3. Content (`src/content/{de,en,it}/`)
- [ ] `pages/home.ts` — hero slides, sections, gallery, testimonials, FAQ, map texts
- [ ] `common.ts` — form/footer/ARIA labels (usually keep)
- [ ] `legal.ts` — Impressum + Datenschutz (have a lawyer review!)

## 4. Images (`public/images/`)
- [ ] Logo + favicon (`/logo.svg`)
- [ ] OG sharing image (`/og-image.jpg`)
- [ ] Hero, rooms, restaurant, gallery photos

## 5. Email (`.env`)
- [ ] `RESEND_API_KEY`
- [ ] `CONTACT_FORM_TO_EMAIL` (recipient)
- [ ] `CONTACT_FORM_FROM_EMAIL` (verified domain in Resend; `onboarding@resend.dev` for testing)

## 6. Verify
- [ ] `npm run build` passes
- [ ] `npx astro check` — 0 errors
- [ ] Form: required validation, Datenschutz checkbox, success/error, email arrives
- [ ] SEO: title, description, canonical, Open Graph, Twitter, hreflang, FAQ JSON-LD
- [ ] Tracking: GTM/GA render only when IDs are set
- [ ] Responsive: desktop / tablet / mobile (menu, fixed buttons, slider, gallery)
- [ ] LanguageSwitcher keeps the current page across DE/IT/EN
- [ ] Pages: `/de/ /it/ /en/` + `impressum` + `datenschutz` per locale

## 7. Deploy
- [ ] Build: `npm run build`
- [ ] Run on a Node host: `node ./dist/server/entry.mjs` (with env vars set)
