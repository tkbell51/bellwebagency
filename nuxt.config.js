export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bell Web Agency',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'At Bell Web Agency, our Mission is to provide the best digital tools to help assist our clients meet their goals and needs.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
     // CSS file in the project
    '~/assets/css/main.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src: '~/plugins/honeybook.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',

  ],
  styleResources: {
    scss: ['~/assets/scss/variables.scss','~/assets/scss/_breakpoints.scss','~/assets/scss/_mixins.scss']
},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/svg-sprite',
  ],
fontawesome: {
        icons: {
          solid:[
            'faEnvelope',
            'faMapMarkerAlt',
            'faPhone',
            'faClock',
            'faCouch',
            'faUserFriends',
            'faAngry',
            'faComment',
            'faBars',
            'faCaretDown',
            'faMobileAlt',
            'faUsers',
            'faArrowRight'
          ],
          brands: [
            'faDev',
            'faFacebook',
            'faTwitter',
            'faLinkedin',
            'faInstagram',
            'faYoutube',
          ]
      },
   
  },
  sitemap: {
    hostname: 'https://bellwebagency.com',
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const posts = await $content('posts').only(['path']).fetch()

      return posts.map((p) => p.path)
    },
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   babel:{
    plugins: [
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["@babel/plugin-proposal-private-methods", { "loose": true }],
      ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
    ]
  }  
  }
}
