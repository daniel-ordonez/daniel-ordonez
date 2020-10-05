<template>
  <div class="container container--blog">
    <div class="flex t--overtext gap--sm">
      <span class="t--capitalize">{{article.date | date}}</span>
      <span>-</span>
      <span>{{`${article.readingTime.text}.`}}</span>
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
import blogpost from '~/assets/classes/blogpost'
export default {
  extends: blogpost,
  name: 'BlogPost',
  filters: {
    date(obj) {
      let [year, month, day] = obj.split('-')
      return format(new Date(year, month, day), 'MMM yyyy')
    }
  }
}
</script>

<style>
@import url(~/assets/style/blog.css);
</style>
