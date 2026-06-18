// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
//
// output: "static" → all pages are prerendered by default (SSG).
// The Node adapter (standalone) is only needed for server routes
// that explicitly disable prerender — in our case /api/contact (form + Resend).
// Standalone mode is not tied to Netlify/Vercel: the site can be
// deployed on any Node host (`node ./dist/server/entry.mjs`).
export default defineConfig({
  output: "static",
  adapter: node({ mode: "standalone" }),
});
