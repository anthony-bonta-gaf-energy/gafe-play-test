import { resolve } from "node:path";
import dts from "unplugin-dts/vite";
import { defineConfig, type Plugin } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";

export default defineConfig({
  plugins: [externalizeDeps(), dts()],
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
