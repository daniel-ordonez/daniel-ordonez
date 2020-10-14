const readingTime = require('reading-time')
export default {
  layout: 'blogpost',
  head() {
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        // Open Graph
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        { hid: 'og:article:author', property: 'og:article:author', content: this.article.author },
        { hid: 'og:url', property: 'og:url', content: `https://daniel-ordonez.com/${this.lang ? this.lang + '/' : ''}blog/${this.article.slug}` },
        { hid: 'og:image', property: 'og:image', content: this.article.image },
        { hid: 'og:locale', property: 'og:locale', content: this.lang ? 'es_ES' : 'en_US' },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      ],
      link: [
        { rel: 'canonical', hid: 'canonical', href: `https://daniel-ordonez.com/${this.lang ? this.lang + '/' : ''}blog/${this.article.slug}` }
      ]
    }
  },
  data: () => ({
    readingTime: null,
    lang: false,
    progress: 0
  }),
  async asyncData ({ $content, route, params, error }) {
    let path = route.path.split('/')
    let lang = path.length > 1 && path[1] === 'es' ? 'es' : false
    let post = params.pathMatch.replace('/','')
    const article = await $content(`${lang ? lang + '/' : ''}blog/${post}`).fetch()
    if (!article) return error({ statusCode: 404, message: 'Article not found' })
    else return {article, lang}
  },
  mounted () {
    this.setProgressBar()
    this.injectReadingTime()
  },
  methods: {
    injectReadingTime () {
      const el = this.$el.querySelector('.nuxt-content-container') || this.$el.querySelector('.nuxt-content')
      if (el) {
        const stats = readingTime(el.textContent)
        this.readingTime = stats
      }
    },
    setProgressBar () {
      const el = this.$el.querySelector('.nuxt-content-container') || this.$el.querySelector('.nuxt-content')
      const onScroll = () => {
        if (this.progress < 100) {
          let rect = el.getBoundingClientRect()
          let v = document.documentElement.clientHeight
          let s = document.documentElement.scrollTop
          let t = s + rect.top
          let h = el.scrollHeight
          let p = Math.floor(((s + v) / (h + t))* 100)
          this.progress = p
        } else {
          window.onscroll = null
        }
      }
      window.onscroll = onScroll
    }
  }
}
