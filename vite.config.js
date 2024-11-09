// vite.config.js
import tailwindcss from "tailwindcss";
import external from "vite-plugin-external";

import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  base: "./",
  server: {
    sourcemap: false,
    mime: {
      // Set the MIME type for .js files to application/javascript
      js: "application/javascript",
    },
  },
  build: {
    rollupOptions: {
      external: [
        "https://cdn.jsdelivr.net/npm/tw-elements@2.0.0/js/tw-elements.umd.min.js",
      ],
    },
  },
  plugins: [tailwindcss()],
}));
