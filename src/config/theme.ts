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

export const theme: Theme = {
  colors: {
    primary: "#6B7A55", // warm olive green
    secondary: "#D8C6A5", // sand
    accent: "#8B5E3C", // terracotta / wood
    text: "#1F1F1F",
    background: "#FFFFFF",
  },
  fonts: {
    heading: "Cormorant Garamond",
    body: "Inter",
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
