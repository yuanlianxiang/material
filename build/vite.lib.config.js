/** @format */

import baseConfig from "./vite.base.config";
import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "../packages/index.ts"),
      name: "material",
      fileName: (format) => `material.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue",
        },
      },
    },
  },
  plugins: [...baseConfig.plugins, dts()],
});
