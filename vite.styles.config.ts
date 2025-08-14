import { defineConfig } from 'vite'
import { resolve } from 'path'

// Separate config for building CSS only
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/styles-only.ts'),
      name: 'AzeriandLibraryStyles',
      formats: ['es'],
      fileName: () => 'styles-temp.js', // This will be deleted
    },
    rollupOptions: {
      output: {
        assetFileNames: () => 'styles.css',
      },
    },
    emptyOutDir: false, // Don't clear dist folder
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
})
