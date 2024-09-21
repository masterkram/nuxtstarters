// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxthq/studio",
    "@nuxtjs/color-mode",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
  ],

  // https://google-fonts.nuxtjs.org/
  googleFonts: {
    families: {
      "DM Sans": "200..900",
    },
  },

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

  site: {
    name: "Nuxt Starters",
    url: "https://nuxtstarters.com/",
    description: "Nuxt starter kits.",
    defaultLocale: "en",
  },

  ogImage: {
    defaults: {
      component: "OgImage",
    },
  },

  compatibilityDate: "2024-09-20",
});
