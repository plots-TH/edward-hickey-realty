import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://edwardhickey.com", // Add this line
  integrations: [tailwind()],
});
