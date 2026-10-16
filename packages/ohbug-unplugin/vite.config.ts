import { defineConfig } from "vite-plus";

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://release-v1-3-0-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
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
    // Ecosystem-ci smoke test: rolldown-plugin-dts cannot bundle the CommonJS
    // webpack, tapable, and postcss declarations that the webpack entry pulls in.
    dts: false,
    entry: {
      index: "src/index.ts",
      vite: "src/vite.ts",
      webpack: "src/webpack.ts",
      rollup: "src/rollup.ts",
      esbuild: "src/esbuild.ts",
      nuxt: "src/nuxt.ts",
    },
    sourcemap: true,
  },
});
