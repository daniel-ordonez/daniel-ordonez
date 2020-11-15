<template>
  <section class="flex flex--col mb--lg">
    <nuxt-link :to="`/${baseURL}blog/`" class="transparent col--all mr--auto">
      <h2>Blog</h2>
    </nuxt-link>
    <div class="subgrid row-gap--sm">
      <template v-for="(post, index) in posts">
        <div class="card md--4" :key="`post--${index}`">
          <div class="card__content">
            <div c class="mb--sm"><strong>{{ post.title }}</strong></div>
            <div>{{ post.description }}</div>
          </div>
        </div>
      </template>
    </div>
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
