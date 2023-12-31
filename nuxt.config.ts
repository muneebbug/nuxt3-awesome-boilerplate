// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  devServer: {
    host: "127.0.0.1"
  },
  imports: {
    dirs: [
      "./stores"
    ],
  },
  pinia: {
    storesDirs: [
      "./stores"
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  tailwindcss: {},
  css: [
    '~/assets/styles.css',
  ],
  googleFonts: {
    families: {

    }
  }
})
