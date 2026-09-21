import { defineConfig } from "vite-plus";

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://rfc-vitest-v5-upgrade-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
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
