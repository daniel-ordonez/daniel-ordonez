<template>
  <div class="container container--blog">
    <div class="flex t--overtext gap--sm">
      <span class="t--capitalize">{{article.date | date}}</span>
      <span>-</span>
      <span>{{`${Math.ceil(article.readingTime.minutes)} min.`}}</span>
    </div>
    <h1>{{article.title}}</h1>
    <img :src="article.image" :alt="article.imageAlt">
    <nuxt-content :document="article"/>
    <div class="scroll-progress" :style="`--progress: ${progress}%`">
      <div class="scroll-progress__bar"></div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import blogpost from '~/assets/classes/blogpost'
export default {
  extends: blogpost,
  name: 'BlogPostEs',
  filters: {
    date(obj) {
      let [year, month, day] = obj.split('-')
      return format(new Date(year, month, day), 'MMM yyyy', {locale: es})
    }
  },
}
</script>
<style>
@import url(~/assets/style/blog.css);
</style>
