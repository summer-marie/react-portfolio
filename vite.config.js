import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      onwarn: (warning, warn) => {
        // Suppress warnings about PURE annotations
        if (warning.code === 'INVALID_ANNOTATION') {
          return
        }
        warn(warning)
      }
    }
  },
  base: ''
})
