import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3100,
  },
  plugins: [vue()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
