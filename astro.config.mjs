import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap()
  ],
  site: "https://noctura.tech",
  output: 'server',
  adapter: deno(),
  compressHTML: false
});