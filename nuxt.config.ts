import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
  ],
  typescript: {
    includeWorkspace: true,
  },
  content: {
    documentDriven: true,
  },
  unocss: {
    configFile: resolve('./uno.config.ts'),
  },
})
