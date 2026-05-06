import { resolve } from "node:path";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [dts()],
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: {
        index: resolve(import.meta.dirname, "./src/index.mts"),
      },
      formats: ["es", "cjs"],
    },
  },
});
