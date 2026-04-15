import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    includeAssets: ['favicon.ico', 'apple-touch-icon.png',],
    manifest: {
      "name": "Camly",
      "short_name": "Camly",
      "start_url": "./index.html",
      "id": "./index.html",
      "display": "standalone",
      "background_color": "#FFAFCC",
      "theme_color": "#FFAFCC",
      "orientation": "portrait-primary",

      "icons": [
        {
          "src": "./src/assets/Img/icon_192x192.png",
          "sizes": "192x192",
          "type": "svg",
          "purpose": "any"
        },
        {
          "src": "./src/assets/Img/icon_512x512.png",
          "sizes": "512x512",
          "type": "svg",
          "purpose": "any"
        }
      ]
    },
    registerType: 'autoUpdate', devOptions: {
      enabled: true
    }
  })],

  //Definerer en proxy router som frontend kan kalde
  server: {
    //Proxy er en mellemstation der videresender dine requests til en anden server
    proxy: {
      '/api/zenquotes': {
        //Base URl som forespørgelsen bliver sendt til
        target: 'https://zenquotes.io',
        //Ændrer origin-header -> hjælper med at undgå CORS problemer
        changeOrigin: true,
        //Sikre at HTTPS bliver verificeret
        secure: true,
        //Ændre endpoint fra:
        // '/api/zenquotes' til '/api/random'
        //Så kald fra frontend rammer den rigtig API router
        rewrite: (path) => path.replace(/^\/api\/zenquotes/, '/api/random'),
      },
    },
  },
})
