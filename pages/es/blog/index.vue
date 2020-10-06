<template>
  <div class="container">
    <h1 align="center">
      Blog
    </h1>
    <grid-showcase>
      <blog-card v-for="(article, index) in posts"
        :key="`post-${index}`"
        :article="article"
        baseURL="es/"
      />
    </grid-showcase>
  </div>
</template>
<script>
export default {
  name: 'BlogPageEs',
  data: () => ({
    posts: []
  }),
  beforeMount () {
    this.$content('es/blog').only(['title', 'description', 'tags', 'slug', 'readingTime', 'image', 'imageAlt']).where({published: true}).sortBy('date', 'desc').fetch()
    .then(posts => {
      this.posts = posts
    })
  },
}
</script>
