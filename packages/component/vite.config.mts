import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import {defineConfig} from 'vite';
// import copy from "rollup-plugin-copy";
import {fileURLToPath, URL} from 'node:url';
import {resolve} from 'path';

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(env => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      // copy({
      //   targets: [{ src: "static/**/*", dest: "dist" }],
      //   hook: "writeBundle",
      // }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'VueTinymce',
        fileName: 'vue-tinymce',
        formats: ['es', 'umd'],
      },
      rollupOptions: {
        // 请确保外部化那些你的库中不需要的依赖
        external: ['vue', 'tinymce'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
            tinymce: 'tinymce',
          },
        },
      },
    },
  };
});
