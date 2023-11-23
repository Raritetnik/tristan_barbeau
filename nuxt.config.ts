// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  devtools: {enabled: true},

  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-delay-hydration', '@nuxt-modules/compression', '@averjs/nuxt-compression', 'nuxt-simple-sitemap', '@nuxtjs/prismic'],

  /*nitro: {
      prerender: {
          crawlLinks: true,
          routes: ['/','/**'],
          ignore: ['/api/**' '/immobilier'],
          failOnError: false,
      },

  },*/
  image: {
      provider: 'netlify',
      netlify: {
          baseURl: process.env.IMAGES_URL
      },
  },

  delayHydration: {
      mode: 'mount',
  },

  app: {
      //pageTransition: {name: 'page', mode: 'out-in'},
      head: {
          htmlAttrs: {
              lang: 'fr',
          },
          title: 'Tristan Barbeau',
          meta: [
              { name: 'description', content: 'Everything about Nuxt 3' }
          ],
          link: [
              {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Fasthand&family=Poppins:wght@400;500;600;800&display=swap'}
          ]
      },
  },

  site: {
      url: 'http://localhost'
  },

  prismic: {
    endpoint: 'tristan-barbeau'
  }
});