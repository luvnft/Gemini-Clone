import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 相対パスでビルドする設定
  build: {
    outDir: 'dist' // 出力ディレクトリを dist に指定
  }
})
