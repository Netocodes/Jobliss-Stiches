import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  base: "/", // Use root path for assets
  server: {
    sourcemap: false,
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
