import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    'content/**/*.md',
  ],
  corePlugins: {
    preflight: false,
  },
}
