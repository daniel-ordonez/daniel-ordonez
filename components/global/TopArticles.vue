<template>
  <section>
    <nuxt-link :to="`/${baseURL}blog/`" class="transparent">
      <h2>Blog</h2>
    </nuxt-link>
    <div class="stack--row gap--md">
      <template v-if="posts">
        <blog-card v-for="(post, index) in posts"
        :key="`post-${index}`"
        :article="post"
        :baseURL="baseURL"
        />
      </template>
      <template v-else>
          <div class="card blog-card" v-for="(_, index) in Array(1)" :key="`post-${index}`">
            <div style="height: 200px; width: 100%" class="skeleton"></div>
            <div class="card__body flex flex--col gap--sm">
              <h3 class="post__title skeleton">empty</h3>
              <div class="post__excerpt skeleton">empty</div>
              <div class="post__excerpt skeleton">empty</div>
            </div>
          </div>
      </template>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array
    },
    baseURL: {
      type: String,
      default: ''
    }
  }
}
</script>
