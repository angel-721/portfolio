// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Minify CSS
      cssMinify: true,
      // Optimize chunks
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name].[hash][extname]",
        },
      },
    },
  },
  build: {
    // Inline CSS for smaller files
    inlineStylesheets: "auto",
  },
});
