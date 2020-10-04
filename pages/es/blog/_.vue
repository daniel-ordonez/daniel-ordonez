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
import blogpost from '~/assets/classes/blogpost'
export default {
  extends: blogpost,
  name: 'BlogPostEs',
  async asyncData ({ $content, route, params, error }) {
    let post = params.pathMatch.replace('/','')
    const article = await $content(`es/blog/${post}`).fetch()
    if (!article) return error({ statusCode: 404, message: 'Article not found' })
    else return {article}
  }
}
</script>
