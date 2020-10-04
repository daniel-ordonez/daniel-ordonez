<template>
  <div class="container">
    <h1 align="center">
      Blog
    </h1>
    <grid-showcase>
      <blog-card v-for="(post, index) in posts"
        :key="`post-${index}`"
        :post="post"
        baseUrl="/es/"
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
    this.$content('es/articles').only(['title', 'description', 'tags', 'slug', 'readingTime']).where({published: true}).sortBy('date', 'desc').fetch()
    .then(posts => {
      this.posts = posts
    })
  },
}
</script>
