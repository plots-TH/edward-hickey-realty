import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://edwardhickeyrealty.netlify.app", // Removed the trailing slash here too
  integrations: [tailwind(), sitemap()],
  adapter: netlify(),
  image: {
    // Just the domain names, no http or slashes
    domains: ["upload.wikimedia.org", "images.compass.com"],
  },
});
