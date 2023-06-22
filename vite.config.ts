import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 2*1024*1024,
  }
})
