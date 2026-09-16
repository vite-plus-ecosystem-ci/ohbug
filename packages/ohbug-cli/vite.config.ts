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
    deps: { resolveDepSubpath: true },
    entry: {
      index: "src/index.ts",
      ohbug: "src/bin/ohbug.ts",
    },
    dts: true,
    exports: true,
    sourcemap: true,
  },
});
