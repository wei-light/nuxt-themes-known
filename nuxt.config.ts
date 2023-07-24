import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    resolve('./assets/css/vars.css'),
    resolve('./assets/css/global.css'),
  ],
  components: [
    {
      prefix: '',
      path: resolve('./components/app'),
      global: true,
    },
    {
      prefix: '',
      path: resolve('./components/base'),
      global: true,
    },
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
  colorMode: {
    preference: 'light',
    classSuffix: '',
  },
})
