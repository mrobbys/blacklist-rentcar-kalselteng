import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png'],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Blacklist Rentcar Kalselteng',
        short_name: 'BlacklistRentcar',
        description: 'Sistem pencarian riwayat penyewa bermasalah untuk wilayah Kalselteng.',
        background_color: '#1267dd',
        theme_color: '#1267dd',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/pwa-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: '/pwa-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    allowedHosts: ['cauliform-demetrice-nonconterminously.ngrok-free.dev'],
  },
});
