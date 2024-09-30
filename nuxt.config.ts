// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxthq/studio",
    "@nuxtjs/color-mode",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
    "@nuxt/fonts",
  ],

  colorMode: {
    classSuffix: "",
  },

  // https://content.nuxt.com/
  content: {
    documentDriven: {
      injectPage: false,
    },
    highlight: false,
  },
  tailwindcss: {
    exposeConfig: true,
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
});
