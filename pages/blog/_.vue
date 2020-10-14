<template>
    <div class="container container--blog">
      <div class="flex t--overtext gap--sm">
        <span class="t--capitalize">{{article.date | date}}</span>
        <template v-if="readingTime">
          <span>-</span>
          <span>{{`${Math.ceil(readingTime.minutes)} min.`}}</span>
        </template>
      </div>
      <h1>{{article.title}}</h1>
      <img :src="article.image" :alt="article.imageAlt">
      <nuxt-content :document="article"/>
      <div id="scroll-progress" :style="`--progress: ${progress}%;${progress >= 100 && 'opacity: 0;'}`">
        <div class="scroll-progress__bar"></div>
      </div>
      <template v-if="article.sources">
        <h2>References</h2>
        <div class="flex flex--col gap--sm">
          <link-ref v-for="(item, index) in article.sources.data" :key="`ref--${index}`" :item="item"/>
        </div>
      </template>
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
@import url(~/assets/style/blogpost.css);
</style>
