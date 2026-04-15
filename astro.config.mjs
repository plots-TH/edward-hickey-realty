import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://netlify.app", // Use this for now
  integrations: [tailwind(), sitemap()],
  adapter: netlify(),
  image: {
    domains: ["upload.wikimedia.org", "://compass.com"],
  },
});
