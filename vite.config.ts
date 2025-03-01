import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Permite conexões externas
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173, // Usa a porta da Render
  },
});
