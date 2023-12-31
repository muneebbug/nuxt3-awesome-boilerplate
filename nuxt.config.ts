// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
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
    '~/assets/css/styles.css',
  ],
})
