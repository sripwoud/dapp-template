import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const plugins = [
  react(),
  tailwindcss(),
  TanStackRouterVite(),
  tsconfigPaths(),
];

export default defineConfig(({ mode }) => {
  return {
    plugins,
    server: { open: mode === "development" },
  };
});
