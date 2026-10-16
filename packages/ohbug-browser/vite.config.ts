import { defineConfig } from "vite-plus";

import pkg from "./package.json";

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://release-v1-3-0-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
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
        cache: {
          input: [{ auto: true }, "!dist/**", "!node_modules/**"],
        },
      },
    },
  },
  pack: {
    deps: {
      // tsdown <0.23 compatibility: resolve external dependency subpaths.
      // Remove to preserve subpath imports as written (the new default).
      // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
      resolveDepSubpath: true,
    },
    dts: true,
    exports: true,
    sourcemap: true,
    define: {
      __VERSION__: JSON.stringify(pkg.version),
    },
  },
});
