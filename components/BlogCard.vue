<template>
  <div class="card blog-card">
    <nuxt-link :to="`/${baseURL}blog/${article.slug}`" class="a--transparent">
      <img :src="article.image" :alt="article.imageAlt">
      <div class="card__body">
        <h3 class="article__title">{{article.title}}</h3>
        <p class="article__excerpt">{{article.description}}</p>
      </div>
    </nuxt-link>
    <div v-show="false">
      <span v-for="(tag, tag_index) in article.tags" :key="`tag--${tag_index}`">{{tag}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    article: {
      type: Object,
      default: () => ({})
    },
    baseURL: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.article__title {
  line-height: 1;
  margin-bottom: 1rem;
}
</style>
