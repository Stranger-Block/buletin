import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Vite/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-solid-svg-icons', // Add this line
        'react-bootstrap',
        // Add other external dependencies if needed
      ],
    },
  },
});
