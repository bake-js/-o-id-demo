import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      element: resolve(__dirname, "packages/element"),
      pixel: resolve(__dirname, "packages/pixel"),
      standard: resolve(__dirname, "packages/standard"),
    },
  },
});
