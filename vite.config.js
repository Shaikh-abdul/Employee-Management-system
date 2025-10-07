import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/employee-management-system/', // 👈 Add this line exactly like this
});
