// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", '@pinia/nuxt'],
  rootDir:'./src',
  css:['~/assets/css/tailwind.css']
})