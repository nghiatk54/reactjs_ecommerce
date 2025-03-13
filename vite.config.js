import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __dirname = path.resolve();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@component": path.resolve(__dirname, "src/component"),
      "@style": path.resolve(__dirname, "src/assets/style"),
      "@icon": path.resolve(__dirname, "src/assets/icon"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@image": path.resolve(__dirname, "src/assets/image"),
    },
  },
});
