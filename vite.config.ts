import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "client", "src"),
      "@shared": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "shared"),
      "@assets": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "attached_assets"),
    },
  },
  root: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "client"),
  build: {
    outDir: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 5000,
    open: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  base: "/",
});
