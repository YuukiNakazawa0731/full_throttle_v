import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages のリポジトリ名を base に設定
  // 例: https://<username>.github.io/full_throttle_v/ で公開される
  base: '/full_throttle_v/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
