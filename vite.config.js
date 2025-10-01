import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react'
    })
  ],
  define: {
    __DEV__: JSON.stringify(true)
  },
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})
