import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Garante que os arquivos estáticos sejam carregados corretamente
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
  },
});
