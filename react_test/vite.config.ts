import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import NodeGlobalsPolyfillPlugin from "@esbuild-plugins/node-globals-polyfill";
import NodePolyfills from "rollup-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      plugins: [NodePolyfills()],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
