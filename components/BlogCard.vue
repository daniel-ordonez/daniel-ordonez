<template>
  <div class="card blog-card">
    <nuxt-link :to="`${baseUrl}blog/${post.slug}`" class="a--transparent">
      <h3 class="post__title">{{post.title}}</h3>
      <p class="post__excerpt">{{post.description}}</p>
    </nuxt-link>
    <div v-show="false">
      <span v-for="(tag, tag_index) in post.tags" :key="`tag--${tag_index}`">{{tag}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    post: {
      type: Object,
      default: () => ({})
    },
    baseUrl: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style>
.post__title {
  line-height: 1;
  margin-bottom: 1rem;
}

.blog-card {
  padding: 1rem;
}
</style>
