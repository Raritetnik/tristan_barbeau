// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  devtools: {enabled: true},
  runtimeConfig: {
      apiSecret: process.env.API_URL, // can be overridden by NUXT_API_SECRET environment variable
      public: {
          apiBase: process.env.API_URL, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      }
    },
  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },
  modules: ['@nuxtjs/tailwindcss',
      '@nuxt/image',
      'nuxt-delay-hydration',
      '@nuxt-modules/compression',
      '@averjs/nuxt-compression',
      'nuxt-simple-sitemap',
      '@nuxtjs/i18n',
      'nuxt3-meta-pixel',
    ],
    facebook: {
        /* module options */
        track: 'PageView',
        pixelId: '2144642769208443',
        autoPageView: true,
        disabled: false
    },
    i18n: {
        vueI18n: './i18n.config.ts',

        locales: ['fr', 'en'],
        defaultLocale: 'fr',
    },
  /*image: {
      provider: 'netlify',
      netlify: {
          baseURl: process.env.IMAGES_URL
      },
  },*/
  delayHydration: {
      mode: 'mount',
  },
  app: {
      head: {
          htmlAttrs: {
              lang: 'fr',
          },
          title: 'Tristan Barbeau',
          meta: [
              { charset: "utf-8" },
              { name: "viewport", content: "width=device-width, initial-scale=1" },
              { hid: "description", name: "description", content: "Les services professionnels proposés par le courtier immobilier Tristan Barbeau. Touts ce qui est associé aux processus d'achat, de vente et de location de biens immobiliers." },
              { name: "format-detection", content: "telephone=no" },
          ],
          link: [
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Fasthand&family=Poppins:wght@400;500;600;800&display=swap'},
              { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
          ],
      },
      pageTransition: { name: 'page', mode: 'out-in' },
      //layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  components: true,
  site: {
      url: 'http://localhost'
  },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    '/a-propos': { prerender: true },
    '/contact': { prerender: true },
    '/calculatrice': { prerender: true },
    '/evaluation': { prerender: true },
  }
});