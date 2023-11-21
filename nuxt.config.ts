// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-delay-hydration",
        "@nuxt-modules/compression", "@averjs/nuxt-compression", "nuxt-simple-sitemap"],

    nitro: {
        compressPublicAssets: true,
        prerender: {
            crawlLinks: true,
            routes: ['/api/contact', '/api/evaluation', '/api/test', '/api/houses'],
            ignore: ['/api/houses'],
            failOnError: false,
        },

    },
    server: {
        port: 3000, // Adjust the port as needed
    },

    functions: {
        // Add your API routes here
        fetchData: 'functions/fetchData.ts', // Example path, adjust accordingly
    },
    routeRules: {
        '/api/**': {isr: true, cors: true, headers: {'access-control-allow-methods': 'GET, POST'}},
    },

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
        },
    },
    site: {
        url: "http://192.168.50.245:3000"

    }
})