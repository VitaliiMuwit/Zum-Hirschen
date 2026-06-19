/**
 * Theme — client colors and fonts.
 *
 * This is the source of truth for the palette and typography. BaseLayout maps
 * these values onto the CSS custom properties defined in styles/variables.css
 * (via `themeToCssVars` injected into a <style> tag), so changing a value here
 * instantly re-themes the whole site. Structural tokens (spacing, radius,
 * shadows, font-size scale, z-index) stay in variables.css.
 *
 * Fonts are loaded from Google Fonts in BaseLayout, built from these names.
 */

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
    /** Light cream for titles/text on colored sections. */
    headingLight: string;
    /** Cream (awning light stripe, card backgrounds). */
    cream: string;
    /** Awning yellow (stripes, bell badge). */
    awning: string;
    /** Ink color for the decorative script titles. */
    script: string;
    /** Peach background (Wohnen section). */
    peach: string;
    /** Light blue-grey background (Features section). */
    features: string;
    /** Extra muted grey (reserve). */
    muted: string;
  };
  fonts: {
    /** Heading font family name (as on Google Fonts). */
    heading: string;
    /** Body font family name (as on Google Fonts). */
    body: string;
    /** Decorative script font for section titles (Augenblicke, Erleben, ...). */
    script: string;
  };
}

// Zum Hirschen brand palette (supplied):
// #F78650 orange · #96ABB0 blue-grey · #A09271 taupe · #726E6A grey · #EBE9DD sand
export const theme: Theme = {
  colors: {
    primary: "#F78650", // orange (CTAs, accents)
    secondary: "#96ABB0", // muted blue-grey (Gastronomie callout)
    accent: "#A09271", // taupe (headings)
    text: "#726E6A", // warm grey (body text)
    background: "#EBE9DD", // sand / cream (body background)
    headingLight: "#F0EDE4", // light cream (titles on colored sections)
    cream: "#FAF9F3", // cream (awning light stripe, card backgrounds)
    awning: "#F8D167", // awning yellow (stripes, bell badge)
    script: "#665D51", // script-title ink
    peach: "#F6E6BF", // Wohnen section background
    features: "#D1D8DC", // Features section background
    muted: "#827E79", // extra muted grey (reserve)
  },
  fonts: {
    // Geist for headings + body; Scriptina/Dancing Script for decorative titles.
    heading: "Geist",
    body: "Geist",
    script: "Dancing Script",
  },
};

/**
 * Map the theme onto the CSS variables used across the stylesheets.
 * Returned as a `:root { ... }` string for injection in BaseLayout.
 */
export function themeToCssVars(t: Theme = theme): string {
  const sans = `system-ui, -apple-system, "Segoe UI", sans-serif`;
  const headingStack = `"${t.fonts.heading}", ${sans}`;
  const bodyStack = `"${t.fonts.body}", ${sans}`;
  const scriptStack = `"${t.fonts.script}", cursive`;
  return `:root{
  --color-primary:${t.colors.primary};
  --color-secondary:${t.colors.secondary};
  --color-accent:${t.colors.accent};
  --color-text:${t.colors.text};
  --color-bg:${t.colors.background};
  --color-surface:${t.colors.background};
  --color-heading-light:${t.colors.headingLight};
  --color-cream:${t.colors.cream};
  --color-awning:${t.colors.awning};
  --color-script:${t.colors.script};
  --color-peach:${t.colors.peach};
  --color-features:${t.colors.features};
  --color-muted:${t.colors.muted};
  --font-heading:${headingStack};
  --font-body:${bodyStack};
  --font-script:${scriptStack};
}`;
}

/** Build the Google Fonts <link> href from the theme font names (deduplicated). */
export function googleFontsHref(t: Theme = theme): string {
  const families = [...new Set([t.fonts.heading, t.fonts.body, t.fonts.script])];
  const params = families.map((name) => `family=${name.replace(/\s+/g, "+")}:wght@400;500;600;700`).join("&");
  return `https://fonts.googleapis.com/css2?${params}&display=swap`;
}
