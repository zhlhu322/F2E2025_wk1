import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 確保這個端口號和啟動時顯示的一致
    open: true, // 啟動時自動開啟瀏覽器
  },
  base: '/', // 確保靜態資源正確載入
})
