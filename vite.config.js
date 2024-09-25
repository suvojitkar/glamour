import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'hostapp',
      filename: 'hostapp.js',
      remotes: {
        sharedComp: "https://glamourcart.web.app/assets/cartcomponents.js",
        // sharedComp: "http://localhost:5174/assets/cartcomponents.js",
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
