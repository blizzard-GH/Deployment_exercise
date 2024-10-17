import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    outDir: 'dist',
    logLevel: 'info',
    chunkSizeWarningLimit: 1000, // Adjust this value as needed
    target: 'modules',
    minify: 'esbuild' 
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
