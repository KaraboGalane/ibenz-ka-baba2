import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ibenz-ka-baba2/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
