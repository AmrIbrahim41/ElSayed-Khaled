import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/elsayed-khaled/', // <-- قم بتغيير هذا إلى اسم المستودع الخاص بك
})