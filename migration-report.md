# Zum Hirschen — Migration Report (pre-migration analysis)

Status: **base ready, content migration NOT started yet.**
The old site is backed up at `../zum-hirschen-old/` (nothing deleted).

## Source analysed

`zum-hirschen-old/` — a single-page static site (no framework, no build):

| File | Role | Decision |
| :--- | :--- | :--- |
| `index.html` (17 KB) | All markup + texts + SEO + inline SVG logo | **Extract content**, discard markup |
| `style.css` (15 KB) | Custom layout + brand colors/fonts | **Extract colors/fonts only**, discard CSS |
| `script.js` (1.6 KB) | Vanilla menu toggle | Discard (starter has MenuOverlay) |
| `CLAUDE.md` | Notes | Ignore |

No image assets exist (logo is inline SVG, decoration is pure CSS) → **no photos
to carry over**; real photos must be added to `public/images/` later.

## Pages / sections found

Single page with anchor sections: `#home`, `#lage`, `#zimmer`, `#restaurant`,
`#umgebung` (Wandern / Skifahren / Biken), `#kontakt`, plus a testimonials block
("Warum Gäste unser Hotel lieben"). Language: **German only.**

## Useful content (to migrate)

**Business / contact → `config/site.ts` + `config/contact.ts`**
- Name: **Hotel Restaurant Zum Hirschen** (★★★ hotel · restaurant)
- Location: Stegen bei Bruneck, Südtirol — `39031 Stegen / Bruneck (BZ)`
  (exact street: **TODO — confirm with client**)
- Phone: `+39 0474 552285` → `tel:+390474552285`
- Email: `info@zumhirschen.it`
- Social: Instagram, Facebook (old site used generic URLs → **TODO real URLs**)
- Partner: `suedtirol.info`

**SEO → `config/seo.ts`**
- Title: "Hotel Restaurant Zum Hirschen – Stegen bei Bruneck, Südtirol"
- Description: "Hotel zum Hirschen in Stegen bei Bruneck – herzliches
  Gasthaus-Feeling, echte Südtiroler Gastlichkeit. Ihr Ausgangspunkt für
  Pustertal & Kronplatz."

**Theme (brand) → `config/theme.ts`**
- Fonts: heading/script **Dancing Script**, body **Mulish**
- Colors: awning yellow `#f1c34d`, cream `#f7f1df`, content `#ece7da`,
  peach `#f8e3b8`, orange `#e08a59` / dark `#d27a48`, heading `#8c8f80`,
  text `#4a4c44`, footer/feature `#c4cbcf`

**Page text → `content/de/pages/home.ts`** (EN/IT = DE copies + TODO)
- Hero: "Willkommen im Hotel zum Hirschen"
- Sections: Beste Lage / Bruneck, Zimmer, Restaurant & Genuss, Pool & Wellness,
  Umgebung (Wandern, Skifahren, Biken), Testimonials, Kontakt

## What will be discarded

- All custom HTML markup, the awning/deer decorative design and layout
- The entire `style.css` (replaced by the starter design + `theme.ts`)
- `script.js` (menu handled by starter `MenuOverlay`)
- Old single-page, German-only architecture

## Target home page (starter components only)

Header → HeroSlider → ContentSection (Hotel/Lage) → ContentSection (Zimmer) →
Gallery → ContentSection (Restaurant/Umgebung) → Testimonials → FAQ →
MapSection → AnfrageForm → Footer.

## Open TODOs for the migration step

- Confirm full street address + Google Maps embed URL
- Real Instagram / Facebook URLs
- Real photos → `public/images/`
- EN / IT translations (start as DE copies with `// TODO translate`)
- `.env`: set `CONTACT_FORM_TO_EMAIL=info@zumhirschen.it`
