import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
   server: {
    port: Number(process.env.VITE_PORT),
    strictPort: true
  }
})