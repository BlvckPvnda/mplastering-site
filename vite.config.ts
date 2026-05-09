import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /** Relative asset paths for widest static hosting compatibility (e.g. GitHub Pages). */
  base: './',
})
