<template>
  <div class="container container--blog">
    <h1>{{article.title}}</h1>
    <div align="right">
      {{article.readingTime.text}}
    </div>
    <nuxt-content :document="article"/>
    <div class="scroll-progress" :style="`--progress: ${progress}%`">
      <div class="scroll-progress__bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  head() {
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      ],
      link: [
        { rel: 'canonical', hid: 'canonical', href: `https://daniel-ordonez.com/es/blog/${this.article.slug}` }
      ]
    }
  },
  data: () => ({
    progress: 0
  }),
  async asyncData ({ $content, route, error }) {
    let post = route.path.split('/').pop()
    const article = await $content(`es/articles/${post}`).fetch()
    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }
    return {
      article
    }
  },
  mounted () {
    const el = this.$el.querySelector('.nuxt-content-container') || this.$el.querySelector('.nuxt-content')
    const onScroll = () => {
      let rect = el.getBoundingClientRect()
      let v = document.documentElement.clientHeight
      let s = document.documentElement.scrollTop
      let t = s + rect.top
      let h = el.scrollHeight
      let p = Math.floor(((s + v) / (h + t))* 100)
      this.progress = p
    }
    window.onscroll = onScroll
  }
}
</script>
