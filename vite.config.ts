import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do .env

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: Number(import.meta.env.VITE_PORT) || 5173,

  },
});
