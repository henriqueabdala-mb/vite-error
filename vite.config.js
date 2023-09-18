import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  base: '/uni/',
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
  plugins: [vue(), ssr()]
}
