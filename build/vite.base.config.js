/** @format */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), Markdown()],
  server: {
    port: 9000,
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
