import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
// import { resolve } from "path";
// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(env => {
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      // outDir: resolve(__dirname, "../../docs"),
      // emptyOutDir: false,
      // rollupOptions: {
      //   input: [resolve(__dirname, "index.html")],
      // },
    },
  };
});
