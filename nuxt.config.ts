import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    'pinceau/nuxt',
    'nuxt-icon',
  ],
  css: [
    resolve('./assets/css/vars.css'),
    resolve('./assets/css/prose.css'),
    resolve('./assets/css/scrollbar.css'),
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
      path: resolve('./components/docs'),
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
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  colorMode: {
    preference: 'light',
    classSuffix: '',
  },
})
