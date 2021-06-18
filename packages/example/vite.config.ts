import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // outDir: resolve(__dirname, "../../docs"),
    // emptyOutDir: false,
    // rollupOptions: {
    //   input: [resolve(__dirname, "index.html")],
    // },
  },
});
