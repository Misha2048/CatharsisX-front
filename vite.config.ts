import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/vite'

// load VITE_PORT from .env
const customPort = Number(loadEnv('all', process.cwd()).VITE_PORT)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
  ],
  server: { port: customPort },
  resolve: {
    alias: {
      '@api': '/src/api/',
      '@assets': '/src/assets/',
      '@components': '/src/components/',
      '@helpers': '/src/helpers/',
      '@pages': '/src/pages/',
      '@redux': '/src/redux/',
      '@utils': '/src/utils/',
    },
  },
})
