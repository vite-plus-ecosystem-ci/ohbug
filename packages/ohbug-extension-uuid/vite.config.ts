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
  pack: { deps: { resolveDepSubpath: true }, dts: true, exports: true, sourcemap: true },
});
