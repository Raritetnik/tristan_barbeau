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
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        'nuxt-delay-hydration',
        '@nuxt-modules/compression',
        '@averjs/nuxt-compression',
        'nuxt-simple-sitemap'
    ],
    /*nitro: {
        compressPublicAssets: true,
        prerender: {
            crawlLinks: false,
            routes: ['/api/contact', '/api/evaluation', '/api/test', '/api/houses'],
            failOnError: false,
        },

    },*/
    delayHydration: {
        mode: 'init',
        // enables nuxt-delay-hydration in dev mode for testing
        debug: process.env.NODE_ENV === 'development'
    },
    app: {
        //pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            htmlAttrs: {
                lang: 'fr',
            },
            title: 'Nuxt Dojo',
            meta: [
                {name: 'description', content: 'Everything about Nuxt 3'}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        },
    },
    site: {
        url: 'http://localhost'
    }
});