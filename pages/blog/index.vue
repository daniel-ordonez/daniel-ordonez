<template>
  <main class="main-grid" role="main">
    <h1 align="center">Blog</h1>
    <section class="subgrid row-gap--sm pb--sm">
      <blog-card
        v-for="(article, index) in posts"
        :key="`post-${index}`"
        :article="article"
        class="lg--4 mb--auto"
      />
    </section>
  </main>
</template>
<script>
export default {
  name: "BlogPage",
  data: () => ({
    posts: [],
  }),
  beforeMount() {
    this.$content("blog")
      .only([
        "title",
        "description",
        "tags",
        "slug",
        "readingTime",
        "image",
        "imageAlt",
      ])
      .where({ published: true })
      .sortBy("date", "desc")
      .fetch()
      .then((posts) => {
        this.posts = posts;
      });
  },
};
</script>
