// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxthq/studio",
    "@nuxtjs/color-mode",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/seo",
  ],

  colorMode: {
    classSuffix: "",
  },

  // https://content.nuxt.com/
  content: {
    documentDriven: {
      navigation: false,
      surround: false,
      injectPage: false,
    },
    highlight: false,
  },

  ogImage: {
    defaults: {
      component: "OgImage",
    },
  },

  compatibilityDate: "2024-09-20",

  runtimeConfig: {
    public: {
      posthogPublicKey: process.env.POSTHOG_PUBLIC_KEY,
      posthogHost: process.env.POSTHOG_HOST,
    },
  },

  site: {
    name: "Nuxt Starters",
    description: "Curated collection of Nuxt starting projects.",
    url: "https://nuxtstarters.com",
  },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },
});
