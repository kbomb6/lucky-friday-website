import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  define: {
    'import.meta.env': JSON.stringify({
      ...env,
      VITE_EMAILJS_USER_ID: env.VITE_EMAILJS_USER_ID,
      VITE_EMAILJS_SERVICE_ID: env.VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID: env.VITE_EMAILJS_TEMPLATE_ID
    })
  }
})