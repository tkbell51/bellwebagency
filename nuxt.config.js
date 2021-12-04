export default {
  publicRuntimeConfig: { baseURL: process.env.NUXT_BASE_URL },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s | " + "Bell Web Agency",
    title: "Bell Web Agency" || "",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "At Bell Web Agency, our Mission is to provide the best digital tools to help assist our clients meet their goals and needs.",
      },

      { name: "format-detection", content: "telephone=no" },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "Bell Web Agency",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://bellwebagency.com",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Bell Web Agency",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "At Bell Web Agency, our Mission is to provide the best digital tools to help assist our clients meet their goals and needs.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/bwa-logo.jpg",
      },

      // Open Graph
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Bell Web Agency",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://bellwebagency.com",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Bell Web Agency",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "At Bell Web Agency, our Mission is to provide the best digital tools to help assist our clients meet their goals and needs.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/bwa-logo.jpg",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "/bwa-logo.jpg",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Bell Web Agency",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    "~/assets/css/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/vue-slick-carousel",
    // {src: '~/plugins/honeybook.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/style-resources",
    "@nuxtjs/fontawesome",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "Josefin+Sans": true,
    },
  },

  styleResources: {
    scss: [
      "~/assets/scss/variables.scss",
      "~/assets/scss/_breakpoints.scss",
      "~/assets/scss/_mixins.scss",
      "~/assets/scss/_typography.scss",
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/svg-sprite",
    "@nuxtjs/sitemap",
    "@nuxt/image",
  ],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/bwa/image/upload/bellwebagency",
    },
  },
  cloudinary: {
    cloudName: "bwa",
    useComponent: true,
  },
  fontawesome: {
    icons: {
      solid: [
        "faEnvelope",
        "faMapMarkerAlt",
        "faCaretDown",
        "faArrowRight",
        "faInfo",
        "faCheck",
      ],
      brands: ["faDev", "faFacebook", "faTwitter", "faLinkedin", "faInstagram"],
    },
  },
  sitemap: {
    hostname: "https://bellwebagency.com",
    gzip: true,
    routes: async () => {
      const { $content } = require("@nuxt/content");

      const posts = await $content("portfolio").only(["path"]).fetch();

      return posts.map((p) => p.path);
    },
  },
  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content({ deep: true }).only(["path"]).fetch();

      return files.map((file) => (file.path === "/index" ? "/" : file.path));
    },
  },
  robots: () => {
    return {
      UserAgent: "Googlebot",
      Disallow: /nogooglebot/,
      UserAgent: "*",
      Allow: "/",
      Sitemap: "https://bellwebagency.com/sitemap.xml",
    };
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        ["@babel/plugin-proposal-private-methods", { loose: true }],
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      ],
    },
  },
};
