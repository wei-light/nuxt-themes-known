import { defineConfig, presetAttributify, presetIcons, presetWind } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  content: {
    filesystem: ['content/**/*.md'],
  },
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  theme: {
    colors: {
      PLAIN: {
        0: 'rgb(var(--color-plain-0))',
        50: 'rgb(var(--color-plain-50))',
        100: 'rgb(var(--color-plain-100))',
        150: 'rgb(var(--color-plain-150))',
        200: 'rgb(var(--color-plain-200))',
        250: 'rgb(var(--color-plain-250))',
        300: 'rgb(var(--color-plain-300))',
        350: 'rgb(var(--color-plain-350))',
        400: 'rgb(var(--color-plain-400))',
        450: 'rgb(var(--color-plain-450))',
        500: 'rgb(var(--color-plain-500))',
        550: 'rgb(var(--color-plain-550))',
        600: 'rgb(var(--color-plain-600))',
        650: 'rgb(var(--color-plain-650))',
        700: 'rgb(var(--color-plain-700))',
        750: 'rgb(var(--color-plain-750))',
        800: 'rgb(var(--color-plain-800))',
        850: 'rgb(var(--color-plain-850))',
        900: 'rgb(var(--color-plain-900))',
        950: 'rgb(var(--color-plain-950))',
        1000: 'rgb(var(--color-plain-1000))',
      },
    },
  },
})
