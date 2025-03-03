export default defineAppConfig({
  general: {
    title: "Nuxt Starters",
    logo: "",
    iconLogo: "emojione:alembic",
  },
  directory: {
    search: {
      placeholder: "Search among {0} templates",
      showCount: true,
      icon: "tabler:bow",
      tags: {
        // options: none,select,show-all,
        display: "show-all",
        intersection: true,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: "Seems that this entry is missing from the archives.",
        // options: button, simple, link
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline
        border: "shadow",
      },
      submit: {
        show: true,
        first: false,
        title: "Submit a template",
        description:
          "Submit a template to show off a good project to other people.",
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: "tabler:star",
      labelForCard: "Featured ✨",
    },
    tags: [
      { name: "SAAS", color: "blue" },
      { name: "dashboard", color: "green" },
      { name: "landing-page" },
      { name: "toolbox" },
      { name: "agency" },
      { name: "markdown" },
      { name: "basics", color: "indigo" },
      { name: "free", color: "green" },
      { name: "paid" },
    ],
    tagPages: {
      title: "Available {0} Nuxt Starter Kits:",
      description:
        "View all available tools and templates in the {0} category...",
    },
  },
  header: {
    banner: {
      show: true,
      text: "Create your own directory website in minutes.",
      link: "https://minteddirectory.com",
      brandText: "MintedDirectory",
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: "Directory", to: "/" },
        {
          name: "Analytics",
          to: "https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ",
          target: "_blank",
        },
      ],
    },
    actionButton: {
      text: "Submit a starter",
      href: "/submit",
    },
  },
  footer: {
    description: "Curated collection of Nuxt starting projects.",
    socials: {
      github: {
        link: "",
        icon: "tabler:brand-github",
      },
      facebook: {
        link: "",
        icon: "tabler:brand-facebook",
      },
      instagram: {
        link: "",
        icon: "tabler:brand-instagram",
      },
      x: {
        link: "https://x.com/mark_bruderer",
        icon: "tabler:brand-twitter",
      },
      youtube: {
        link: "https://www.youtube.com/@mark_hacks",
        icon: "tabler:brand-youtube",
      },
    },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});
