import { resolve } from "node:path";
import dts from "unplugin-dts/vite";
import { defineConfig, type Plugin } from "vite";

export default defineConfig({
  plugins: [
    dts({
      aliasesExclude: [/^@gafe\//],
    }),
  ],
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: {
        index: resolve(import.meta.dirname, "./src/index.mts"),
      },
      formats: ["es", "cjs"],
    },
    rolldownOptions: {
      external: ["@gafe/package-a"],
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
});
