import { defineConfig } from "vite-plus";

import pkg from "./package.json";

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  define: {
    __VERSION__: JSON.stringify(pkg.version),
  },
  run: {
    tasks: {
      build: {
        command: "vp pack",
        input: [{ auto: true }, "!dist/**", "!node_modules/**"],
      },
    },
  },
  pack: {
    deps: { resolveDepSubpath: true },
    dts: true,
    exports: true,
    sourcemap: true,
    define: {
      __VERSION__: JSON.stringify(pkg.version),
    },
  },
});
