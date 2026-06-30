import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site: repo must be named "jackyfhuang.github.io" → base stays '/'
// Project site: if repo is "portfolio" instead, change base to '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
