import { defineConfig } from "vite-plus";

export default defineConfig({
  test: { clearMocks: false },
  run: {
    tasks: {
      build: {
        command: "vp pack",
        input: [{ auto: true }, "!dist/**", "!node_modules/**"],
      },
    },
  },
  pack: {
    dts: false,
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
