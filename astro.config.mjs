// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: true,
  },
  session: {
    driver: "fs",
    options: {
      base: "./data/session",
    },
  },
});
