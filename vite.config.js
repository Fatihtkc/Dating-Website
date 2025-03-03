import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Vite'in varsayılan portu
  },
  base: './', // 404 hatalarını önlemek için önemli!
});
