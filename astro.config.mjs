// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
//
// Fully static (SSG) build for the GitHub Pages project site:
//   https://vitaliimuwit.github.io/Zum-Hirschen/
// `base` must match the repo name. Every internal link/asset is prefixed with it
// via withBase() / localizePath() (see src/i18n). No server adapter: GitHub Pages
// hosts static files only (the old /api/contact form route was removed).
export default defineConfig({
  site: "https://vitaliimuwit.github.io",
  base: "/Zum-Hirschen",
  output: "static",
  trailingSlash: "ignore",
});
