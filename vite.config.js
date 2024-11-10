import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Jobliss-Stiches/" : "./", // Set base URL differently in production
  server: {
    sourcemap: mode === "development", // Enable sourcemaps only in development
  },
  build: {
    rollupOptions: {
      external: [
        "https://cdn.jsdelivr.net/npm/tw-elements@2.0.0/js/tw-elements.umd.min.js",
      ],
    },
    minify: mode === "production" ? "esbuild" : false, // Minify only in production
  },
  plugins: [tailwindcss()],
}));
