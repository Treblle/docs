import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import react from '@astrojs/react'

import mdx from '@astrojs/mdx'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    mdx(),
    tailwind(),
    vue(),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },
  site: `https://docs.treblle.com`,
  redirects: {
    '/en/integrations/dotnet': '/en/integrations/net',
    '/en/integrations/rails': '/en/integrations/ruby',
    '/en/integrations/dotnet-core': '/en/integrations/net-core',
    '/en/dashboard/customize': '/en/dashboard',
    '/en/sdks': '/en/integrations',
    '/sdks': '/en/integrations',
    '/integrations': '/en/integrations',
    '/en/integrations/symfony/%5Bhttps://getcomposer.org': '/en/integrations/symfony'
  },
})
