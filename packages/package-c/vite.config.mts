import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    dts({
      exclude: ["**/*.test.ts", "vite.config.mts"],
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
