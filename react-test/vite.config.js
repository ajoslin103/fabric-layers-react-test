import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

// Get directory name in ESM context
const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  resolve: {
    alias: {
      // Ensure node_modules are properly resolved
      'fabric-layers-react': resolve(__dirname, 'node_modules/fabric-layers-react'),
      'fabric-pure-browser': resolve(__dirname, 'node_modules/fabric-pure-browser'),
      'eventemitter2': resolve(__dirname, 'node_modules/eventemitter2'),
    },
  },
})
