# Muwit Astro Starter

A reusable, multilingual Astro starter template for typical Muwit client
websites — hotels, apartments, restaurants, and local businesses, in the style
of South Tyrol / Alto Adige.

The goal: spin up a new client site by editing **config, content, theme and
images only** — never the components. No WordPress, no Elementor, no jQuery.

> A detailed step-by-step guide (Ukrainian) lives in
> [`../instruction.md`](../instruction.md). This README is the English overview.

---

## Tech stack

- **Astro** + **TypeScript** — static-first, component-based
- **CSS** with design tokens (CSS custom properties), themed from `config/theme.ts`
- **Swiper** — HeroSlider and Testimonials
- **PhotoSwipe** — Gallery lightbox
- **Resend** — transactional email for the contact form
- **@astrojs/node** (standalone) — adapter for the one server route (`/api/contact`)

`output: "static"` — every page is prerendered (SSG). Only `/api/contact` runs
on the server, so the site stays host-agnostic (any Node host; not tied to
Netlify/Vercel). React is intentionally not used.

---

## What we currently have

- ✅ **Multilingual** (DE default, IT, EN): URL prefixes `/de/`, `/en/`, `/it/`,
  `hreflang`, language switcher that preserves the current page.
- ✅ **Central config layer** `src/config/` — one place per concern.
- ✅ **Theming** via `config/theme.ts` → injected CSS variables + Google Fonts.
- ✅ **SEO**: per-page title/description/image (`config/seo.ts`) with site-wide
  fallbacks, canonical, Open Graph, Twitter Card, `hreflang`, FAQ JSON-LD.
- ✅ **Tracking**: optional GTM + GA, toggled by IDs in `config/site.ts`.
- ✅ **Contact form (Anfrage)** → `/api/contact` → Resend, validated + accessible.
- ✅ **Reusable components** (see below), all responsive and accessible.

---

## Reusable components

| Component                | Purpose                                                                |
| :----------------------- | :--------------------------------------------------------------------- |
| `Header` + `MenuOverlay` | Logo, language switcher, fullscreen menu (Esc to close)                |
| `LanguageSwitcher`       | DE/IT/EN, keeps current page                                           |
| `HeroSlider`             | Swiper hero with slides, CTA, autoplay (respects reduced-motion)       |
| `Hero`                   | Single static hero (alternative to the slider)                         |
| `ContentSection`         | Text + Image / Image + Text block (`reverse`)                          |
| `Gallery`                | Responsive grid + PhotoSwipe lightbox                                  |
| `Testimonials`           | Reviews; Swiper slider when more than one                              |
| `FAQ`                    | `<details>` accordion + FAQPage JSON-LD                                |
| `MapSection`             | Google Maps embed + "Lage & Anfahrt" button (from `config/contact.ts`) |
| `PartnerLogos`           | Partner logo grid (from `config/partners.ts`)                          |
| `FixedButtons`           | Sticky CTA buttons (from `config/fixedButtons.ts`)                     |
| `AnfrageForm`            | Contact form → `/api/contact` (Resend)                                 |
| `Footer`                 | Contact, social, legal, partners, Muwit                                |

---

## Project structure

```text
muwit-astro-starter/
├── .env.example
├── astro.config.mjs                 # output: static + @astrojs/node adapter
├── src/
│   ├── config/                      # ⭐ EDIT THIS per client
│   │   ├── site.ts                  # name, domain, locales, logo, company, muwit, tracking, SEO defaults
│   │   ├── contact.ts               # phone, email, address, maps, opening hours
│   │   ├── menu.ts                  # multilingual navigation
│   │   ├── fixedButtons.ts          # multilingual sticky CTAs
│   │   ├── seo.ts                   # per-page, per-locale SEO + getSeo() helper
│   │   ├── theme.ts                 # colors + fonts → CSS variables
│   │   ├── social.ts                # social links
│   │   └── partners.ts              # partner logos
│   ├── content/                     # translatable page text
│   │   ├── de/  (common.ts, legal.ts, pages/home.ts)
│   │   ├── en/  (common.ts, legal.ts, pages/home.ts)
│   │   └── it/  (common.ts, legal.ts, pages/home.ts)
│   ├── i18n/index.ts                # translations loader, locales, helpers
│   ├── layouts/BaseLayout.astro     # head/SEO/OG/hreflang/GTM-GA, theme injection, i18n root
│   ├── components/                  # reusable components (see table above)
│   ├── pages/
│   │   ├── index.astro              # redirect / → /de/
│   │   ├── api/contact.ts           # POST endpoint: validate + Resend
│   │   └── [lang]/                  # /de/, /en/, /it/ (index, impressum, datenschutz)
│   └── styles/
│       ├── variables.css            # structural + color-mix derived tokens
│       ├── global.css               # reset + utilities
│       └── components/_anfrage-form.scss
└── public/                          # logo, og-image, images/
```

---

## Configuration model

Everything client-specific is edited in these places — never in components:

| What                                              | Where                                              |
| :------------------------------------------------ | :------------------------------------------------- |
| Brand, domain, company, tracking, SEO fallbacks   | `src/config/site.ts`                               |
| Phone, email, address, Google Maps, opening hours | `src/config/contact.ts`                            |
| Navigation / sticky CTAs                          | `src/config/menu.ts`, `src/config/fixedButtons.ts` |
| Per-page SEO                                      | `src/config/seo.ts`                                |
| Colors & fonts                                    | `src/config/theme.ts`                              |
| Social / partners                                 | `src/config/social.ts`, `src/config/partners.ts`   |
| Page text (per language)                          | `src/content/{de,en,it}/`                          |
| Form secrets (Resend)                             | `.env`                                             |
| Images                                            | `public/images/`                                   |

### Theme

`config/theme.ts` is the source of truth for colors and fonts. BaseLayout maps
it onto CSS custom properties (`--color-primary`, `--font-heading`, …) and builds
the Google Fonts link. Derived tokens in `variables.css` use `color-mix()` on the
base colors, so the whole palette follows the theme.

### SEO

```astro
import { getSeo } from "../../config/seo";
<BaseLayout locale={lang} seo={getSeo("home", lang)}> … </BaseLayout>
```

`getSeo(page, locale)` returns the override for that page/locale; missing fields
fall back to `site.seo.*`. Title is wrapped in `site.seo.titleTemplate`.

### Tracking

Set `tracking.gtmId` / `tracking.gaId` in `config/site.ts`. Empty = disabled.

---

## Component usage

**HeroSlider** — slides via props:

```astro
<HeroSlider slides={home.hero.slides} autoplay={true} loop={true} />
// slide: { title, subtitle?, image, alt, ctaLabel?, ctaHref? }
```

**Gallery** — PhotoSwipe lightbox:

```astro
<Gallery images={home.gallery.images} columns={3} />
// image: { src, thumb?, alt, caption?, width?, height? }
```

**MapSection** — reads URLs from `config/contact.ts`:

```astro
<MapSection title="Lage & Anfahrt" text="…" buttonLabel="Lage & Anfahrt" />
// set contact.googleMapsEmbedUrl (iframe) and contact.googleMapsUrl (button)
```

---

## Contact form + Resend

`AnfrageForm` posts to `/api/contact`, which validates and sends a German HTML
email via Resend.

1. `cp .env.example .env`
2. Fill in:
   ```env
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_FORM_TO_EMAIL=info@client.it       # receives enquiries
   CONTACT_FORM_FROM_EMAIL=website@muwit.it   # sender (verified domain in Resend)
   ```

`.env` is git-ignored. The sender domain must be verified in Resend; for local
testing you can use `onboarding@resend.dev`.

---

## Commands

| Command           | Action                            |
| :---------------- | :-------------------------------- |
| `npm install`     | Install dependencies              |
| `npm run dev`     | Dev server at `localhost:4321`    |
| `npm run build`   | Build to `./dist/`                |
| `npm run preview` | Preview the production build      |
| `npx astro check` | TypeScript / template diagnostics |

Production (Node host): `node ./dist/server/entry.mjs` with the env vars set.

---

## New client workflow

```bash
cp -R muwit-astro-starter new-client    # or: rsync -a --exclude node_modules --exclude dist muwit-astro-starter/ new-client/
cd new-client
npm install
cp .env.example .env               # add Resend key + recipient
npm run dev
```

Then edit, in order:

1. **`src/config/theme.ts`** — colors + fonts
2. **`src/config/site.ts`** — name, domain, company, tracking, SEO defaults
3. **`src/config/contact.ts`** — phone, email, address, maps
4. **`src/config/menu.ts`, `fixedButtons.ts`, `social.ts`, `partners.ts`**
5. **`src/config/seo.ts`** — per-page SEO
6. **`src/content/{de,en,it}/`** — page texts (hero, sections, gallery, FAQ, …)
7. **`public/images/`** — replace logo, og-image and photos

No component files need to change.

---

## Still to do later

- Optional dedicated pages (`/zimmer`, `/restaurant`, …) — currently the home
  page presents these as sections; menu links point to anchors.
- Wire `config/booking` style external booking engine into the CTAs if needed.

padding = (clamp(66px, 15.63vw, 300px)), (clamp(96px, 11.46vw, 220px))
Палітра сайту (для довідки) тепер уся в коді: #A09271 (taupe/headings), #F0EDE4, #F8D167 (awning), #827E79, #EBE9DD (body), #FAF9F3 (awning cream), #665D51 (script-title), #726E6A (text), #96ABB0 (callout), #F78650 (primary/orange), #D1D8DC (features). #827E79 поки ніде — скажіть, де його застосувати.
---

## Colors (theme palette)

All colors live in **`src/config/theme.ts`** (object `colors`, ~lines 49–60).
Edit a value there and every `var(--color-*)` across the site updates — no
component files need to change.

| CSS variable | Hex | Usage |
| --- | --- | --- |
| `--color-primary` | `#F78650` | Orange — CTAs, accents |
| `--color-secondary` | `#96ABB0` | Muted blue-grey — Gastronomie callout |
| `--color-accent` | `#A09271` | Taupe — headings |
| `--color-text` | `#726E6A` | Warm grey — body text |
| `--color-bg` / `--color-surface` | `#EBE9DD` | Sand/cream — body background |
| `--color-heading-light` | `#F0EDE4` | Light cream — titles on colored sections |
| `--color-cream` | `#FAF9F3` | Cream — awning light stripe, card backgrounds |
| `--color-awning` | `#F8D167` | Awning yellow — stripes, bell badge |
| `--color-script` | `#665D51` | Ink — decorative script titles |
| `--color-peach` | `#F6E6BF` | Wohnen section background |
| `--color-features` | `#D1D8DC` | Features section background |
| `--color-muted` | `#827E79` | Extra muted grey (reserve, currently unused) |
