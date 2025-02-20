import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const plugins = [react(), tailwindcss(), TanStackRouterVite(), tsconfigPaths()];

export default defineConfig(({ mode }) => {
  return {
    // https://vite.dev/guide/static-deploy#github-pages
    base: "/web-app-template/",
    plugins,
    optimizeDeps: {
      esbuildOptions: {
        // https://docs.dynamic.xyz/troubleshooting/react/vitejs-polyfills-necessary-for-dynamic-sdk
        plugins: [
          NodeGlobalsPolyfillPlugin({ process: true }),
          NodeModulesPolyfillPlugin(),
        ],
      },
    },
    server: { open: mode === "development" },
  };
});
