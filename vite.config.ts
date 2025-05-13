import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'contexts': path.resolve(__dirname, './src/contexts'),
      'utils': path.resolve(__dirname, './src/utils'),
      'constants': path.resolve(__dirname, './src/constants'),
      'types': path.resolve(__dirname, './src/types'),
      'i18n': path.resolve(__dirname, './src/i18n'),
      // Agrega más alias si los necesitas
    },
  },
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});
