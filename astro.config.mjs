import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// Site URL used for sitemap + canonical fallbacks; keep in sync with src/config/siteConfig.ts
const site = "https://elementalskinandbody.com";

export default defineConfig({
  site,
  output: "static",
  integrations: [react(), sitemap()],
  redirects: {
    "/services/injectables/vampire-facial": "/services/skin/vampire-facial",
    "/services/skin/elemental-facial": "/services/skin/",
    "/services/body/emsella": "/services/wellness/emsella",
  },
});
