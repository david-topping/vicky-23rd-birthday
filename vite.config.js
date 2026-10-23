import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the root of the custom domain in public/CNAME
export default defineConfig({
  plugins: [react()],
  base: '/',
})
