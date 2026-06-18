# Image TODO — Zum Hirschen

All images on the site are currently **SVG placeholders** in
`public/images/placeholders/`. Each shows its purpose + "Replace with real image"
+ the recommended size. Replace them with real photos (same path, or update the
path in `src/content/*/pages/home.ts` / `src/config/`).

| Placeholder | Where used | Recommended real image | Size |
| :--- | :--- | :--- | :--- |
| `hero-zum-hirschen.svg` | HeroSlider, slide 1 | Main exterior / atmosphere photo of the hotel | 1920×1080 |
| `hero-geschichte.svg` | HeroSlider, slide 2 | Historic detail (vaults / facade, "since 1414") | 1920×1080 |
| `hotel-exterior.svg` | "Echtes Gasthaus-Feeling" intro section | Hotel exterior / Gasthaus façade | 1200×900 |
| `zimmer-preise.svg` | "Zimmer & Preise" section | Room / suite interior | 1200×900 |
| `wellness.svg` | "Genuss & Wellness" section | Pool / sauna / garden | 1200×900 |
| `gallery-garten-pool.svg` | Gallery | Garden with outdoor pool | 1200×800 |
| `gallery-sauna.svg` | Gallery | Sauna / wellness area | 1200×800 |
| `gallery-zimmer.svg` | Gallery | Room with balcony | 1200×800 |
| `gallery-fruehstueck.svg` | Gallery | Breakfast buffet | 1200×800 |
| `gallery-bruneck.svg` | Gallery | Bruneck old town | 1200×800 |
| `gallery-gewoelbe.svg` | Gallery | Historic vault (1414) | 1200×800 |
| `og-zum-hirschen.svg` | SEO `og:image` (`config/site.ts`) | Best exterior photo (JPG/PNG) | 1200×630 |
| `logo-placeholder.svg` | Favicon + Footer (`config/site.ts → logo`) | Real Zum Hirschen logo (SVG preferred) | 600×300 |

## How to replace

1. Drop the real file into `public/images/` (e.g. `public/images/hero.jpg`).
2. Update the path in the matching place:
   - Page photos → `src/content/de|en|it/pages/home.ts`
   - Logo / OG image → `src/config/site.ts`
3. Prefer optimized JPG/WebP for photos; keep alt texts (already descriptive).

## Notes
- The header brand uses an inline SVG deer + script wordmark — no logo image needed there.
- `logo-placeholder.svg` is still used for the favicon and the footer logo.
- Partner logos (`config/partners.ts`) are intentionally empty until real assets exist.
