import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

const __dirname = path.resolve();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
        icon: true,
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@component": path.resolve(__dirname, "src/component"),
      "@style": path.resolve(__dirname, "src/assets/style"),
      "@icon": path.resolve(__dirname, "src/assets/icon"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@image": path.resolve(__dirname, "src/assets/image"),
      "@api": path.resolve(__dirname, "src/api"),
      "@hook": path.resolve(__dirname, "src/hook"),
      "@page": path.resolve(__dirname, "src/page"),
      "@route": path.resolve(__dirname, "src/route"),
      "@context": path.resolve(__dirname, "src/context"),
    },
  },
});
