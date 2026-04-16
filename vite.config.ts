import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

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
