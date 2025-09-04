import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Pages under a repository like /your-repo/,
// set base: '/your-repo/' below.
export default defineConfig({
  plugins: [react()],
  base: '/', 
  server: { port: 5173 }
})
