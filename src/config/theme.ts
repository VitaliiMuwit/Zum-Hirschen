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
  };
  fonts: {
    /** Heading font family name (as on Google Fonts). */
    heading: string;
    /** Body font family name (as on Google Fonts). */
    body: string;
  };
}

// Brand palette migrated from the old Zum Hirschen site (awning yellow,
// terracotta orange, warm cream). See migration-report.md.
export const theme: Theme = {
  colors: {
    primary: "#e08a59", // terracotta orange (CTAs)
    secondary: "#f1c34d", // awning yellow
    accent: "#d27a48", // darker orange (hover/accents)
    text: "#4a4c44", // warm dark grey
    background: "#f7f1df", // warm cream
  },
  fonts: {
    // Brand fonts: decorative script for headings, clean sans for body.
    heading: "Dancing Script",
    body: "Mulish",
  },
};

/**
 * Map the theme onto the CSS variables used across the stylesheets.
 * Returned as a `:root { ... }` string for injection in BaseLayout.
 */
export function themeToCssVars(t: Theme = theme): string {
  const headingStack = `"${t.fonts.heading}", "Times New Roman", serif`;
  const bodyStack = `"${t.fonts.body}", system-ui, -apple-system, "Segoe UI", sans-serif`;
  return `:root{
  --color-primary:${t.colors.primary};
  --color-secondary:${t.colors.secondary};
  --color-accent:${t.colors.accent};
  --color-text:${t.colors.text};
  --color-bg:${t.colors.background};
  --color-surface:${t.colors.background};
  --font-heading:${headingStack};
  --font-body:${bodyStack};
}`;
}

/** Build the Google Fonts <link> href from the theme font names. */
export function googleFontsHref(t: Theme = theme): string {
  const fam = (name: string) => `family=${name.replace(/\s+/g, "+")}:wght@400;500;600;700`;
  return `https://fonts.googleapis.com/css2?${fam(t.fonts.heading)}&${fam(t.fonts.body)}&display=swap`;
}
