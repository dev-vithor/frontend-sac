import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/frontend-sac', 
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        // Use a nova API do Sass
        api: "modern-compiler",
      },
    },
  },
});
