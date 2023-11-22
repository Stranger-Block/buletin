import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/News/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@fortawesome/react-fontawesome'],
    },
  },
});

