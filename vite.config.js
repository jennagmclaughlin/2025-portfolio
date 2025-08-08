import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // base: "/2025-portfolio",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // set alias for src folder
      // so instead of "import Component from './src/'", it will be "import Component from '@/'"
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
