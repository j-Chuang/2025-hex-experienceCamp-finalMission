import { defineConfig } from 'vite';

export default defineConfig({
  base: '/2025-hex-experienceCamp-finalMission/', // 注意前後斜線
  publicDir: false,
  server: {
    // 啟動 server 時預設開啟的頁面
    open: 'pages/index.html',
  },
});
