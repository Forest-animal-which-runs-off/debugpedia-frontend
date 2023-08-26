// vite.config.ts
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: false,
      eslint: {
        lintCommand: 'eslint --ext .tsx,.ts,.jsx,.js .',
      },
    }),
  ],
  server: {
    port: 4000,
  },
});
