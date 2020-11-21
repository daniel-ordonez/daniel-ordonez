<template>
  <div>
    <main class="main-grid pb--sm" role="main">
      <figure
        v-if="article.image"
        :style="`--article-cover--bg-color: ${article.imageBgColor}`"
        class="article-cover flex justify-content--center span--all"
      >
        <img :src="article.image" :alt="article.imageAlt" />
      </figure>
      <div
        class="span--all pa--sm flex justify-content--center gap--sm t--overtext"
      >
        <span class="t--capitalize">{{ article.date | date }}</span>
        <template v-if="readingTime">
          <span>-</span>
          <span>{{ `${Math.ceil(readingTime.minutes)} min.` }}</span>
        </template>
      </div>
      <h1 align="center">{{ article.title }}</h1>
      <article>
        <nuxt-content :document="article" />
        <template v-if="article.sources">
          <h2>References</h2>
          <div class="flex flex--col row-gap--sm">
            <link-ref
              v-for="(item, index) in article.sources.data"
              :key="`ref--${index}`"
              :item="item"
            />
          </div>
        </template>
      </article>
    </main>
    <div
      id="scroll-progress"
      :style="`--progress: ${progress}%;${progress >= 100 && 'opacity: 0;'}`"
    >
      <div class="scroll-progress__bar"></div>
    </div>
  </div>
</template>


<script>
import { format } from "date-fns";
import blogpost from "~/assets/classes/blogpost";
export default {
  extends: blogpost,
  name: "BlogPost",
  filters: {
    date(obj) {
      let [year, month, day] = obj.split("-");
      return format(new Date(year, month - 1, day), "MMM yyyy");
    },
  },
};
</script>

<style>
@import url(~/assets/style/blogpost.css);
</style>
