import { resolve } from "path";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
      },
    }),
  ],
});
