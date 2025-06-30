import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            tailwindcss(),
  ],
   server: {
    host: true,
    port: 5173,
    allowedHosts: [
      '1419-2405-201-5c06-a029-f42a-b562-c9a-27eb.ngrok-free.app'
    ]
  },
})
