import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['react-icons'],
          'vendor-motion': ['framer-motion'],
          'vendor-gsap': ['gsap'],
          'vendor-three': ['three'],
          'vendor-others': ['aos', 'ogl', 'lucide-react']
        }
      }
    }
  }
})
