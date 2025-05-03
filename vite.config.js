// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // This will be dynamically updated by GitHub Actions
  build: {
    outDir: 'dist', // Ensure this matches Netlify's publish directory
  },
});
