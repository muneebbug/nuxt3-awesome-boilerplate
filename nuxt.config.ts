// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-headlessui',
    '@bg-dev/nuxt-naiveui',
    'nuxt-purgecss',
    'shadcn-nuxt',
    '@nuxtjs/eslint-module'
  ],
  devServer: {
    host: '127.0.0.1'
  },
  imports: {
    dirs: [
      './stores'
    ]
  },
  pinia: {
    storesDirs: [
      './stores'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  purgecss: {},
  tailwindcss: {
    viewer: false,
    exposeConfig: true
  },
  css: [
    '~/assets/css/styles.css'
  ],
  googleFonts: {
    families: {
      Inter: [
        400, 500, 600, 700, 800
      ]
    }
  },
  headlessui: {
    prefix: 'Headless'
  },
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  naiveui: {
    colorModePreference: 'system'
  }
})
