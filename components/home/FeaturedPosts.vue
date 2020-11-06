<template>
  <section class="display--contents">
    <nuxt-link :to="`/${baseURL}blog/`" class="transparent col--all">
      <h2>Blog</h2>
    </nuxt-link>
    <featured-post-card 
      v-for="(post, index) in posts" 
      :key="`post--${index}`" 
      :post="post"
      class="col--4" 
    />
  </section>
</template>

<script>
import langURL from '~/mixins/langURL'
export default {
  name: 'FeaturedPosts',
  mixins: [langURL],
  props: {
    feature: {
      type: Number,
      default: 3,
    },
  },
  data: () => ({
    posts: [],
    ready: false,
  }),
  async mounted() {
    const baseURL = this.baseURL
    this.$content(`${ baseURL }blog`).only(['title', 'description', 'slug'])
    .where({ published: true, featured: true })
    .limit(3)
    .sortBy('date', 'desc')
    .fetch()
    .then(posts => {
      this.posts = posts
    })
    .finally(() => {
      this.ready = true
    })
  },
}
</script>
