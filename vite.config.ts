import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/quiz-app/', // ← REQUIRED for GitHub Pages!
  plugins: [react(), tailwindcss()],
})
