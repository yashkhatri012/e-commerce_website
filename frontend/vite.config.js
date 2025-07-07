import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            tailwindcss(),
  ],
  
   server: {
    port: 5173,
     allowedHosts: [
      '9b41-2405-201-5c06-a029-987d-eb38-8f2-8abc.ngrok-free.app',
    ]
  },
})
