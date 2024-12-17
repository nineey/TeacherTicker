// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
  ],
  css: [
    "./assets/css/main.css",
  ],

  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
supabase: {
  redirectOptions: {
    login: '/login',
    callback: '/',
    include: undefined,
    exclude: [],
  },
},
  runtimeConfig: {
     // can be overridden by NUXT_API_SECRET environment variable
public: {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
}

  },
})