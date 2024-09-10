import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' })],
  server: {
    port: 5176,
  },
  
  build: {
    minify: false,
    rollupOptions: {
      // 兼容 preserveModules
      preserveEntrySignatures: 'allow-extension',
      output: {
        dir: 'dist',
        // 保持原目录结构
        preserveModules: true,
        // 保持文件扩展名
        entryFileNames: '[name].js',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
