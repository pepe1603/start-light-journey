// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // 1. Agregamos el módulo
  modules: ['@nuxt/ui', '@pinia/nuxt',],

  // 2. Registramos el CSS global (que crearemos ahora)
  css: ['~/assets/css/main.css'],
  
  
})

