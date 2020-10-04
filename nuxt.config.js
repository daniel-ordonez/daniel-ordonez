
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Daniel Ordoñez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { hid: 'hreflang-es', rel: 'alternate', href: 'https://daniel-ordonez.com/es/', hreflang: 'es' },
      { hid: 'hreflang-en', rel: 'alternate', href: 'https://daniel-ordonez.com/', hreflang: 'en' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/static/style/stylesheet.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const stats = require('reading-time')(document.text)
        document.readingTime = stats
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  icon: {
    fileName: 'icon.png'
  },
  pwa: {
    manifest: {
      name: 'Daniel Ordoñez',
      short_name: 'dõ app',
      lang: 'en',
      description: "Yo! I'm Daniel, a developer and design enthusiast who likes making digital stuff and day dreams on a better tomorrow."
    },
    meta: {
      name: 'Daniel Ordoñez',
      author: 'Daniel Ordoñez',
      description: "I'm Daniel, a developer and design enthusiast who likes making digital stuff and day dreams on a better tomorrow.",
      ogHost: 'daniel-ordonez.com'
    }
  }
}
