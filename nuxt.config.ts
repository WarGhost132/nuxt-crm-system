// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Lato: {
                        wght: [300, 400, 700],
                        ital: [300],
                    },
                },
            },
        ],
        'nuxt-icon',
        '@pinia/nuxt',
        '@vee-validate/nuxt',
    ],

    shadcn: {
        prefix: 'Ui',
        componentDir: './components/ui',
    },

    pinia: {
        storesDirs: ['./store/**'],
    },

    compatibilityDate: '2024-12-26',
});
