<template>
  <main class="flex flex--col">
    <section id="greeting">
      <h1 class="t--display">Yo!<br>I'm Daniel</h1>
      <h2 class="t--headline">I make digital stuff</h2>
      <p>Learn + Enjoy + Design + Create + Repeat ❤️</p>
    </section>
    <div class="container--main">
      <div class="stack--row min-content gap--lg">
        <section>
          <h2>Projects</h2>
          <div class="stack--row gap--md" >
            <project-card v-for="(project, index) in projects"
              :key="`project-${index}`"
              :project="project"
            />
          </div>
        </section>
        <section>
          <nuxt-link :to="`/blog/`" class="a--transparent">
            <h2>Blog</h2>
          </nuxt-link>
          <div class="stack--row gap--md">
            <blog-card v-for="(post, index) in posts"
            :key="`post-${index}`"
            :post="post"
            />
          </div>
        </section>
      </div>
      <section>
        <about-me></about-me>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  head: {
    link: [
      { rel: 'canonical', hid: 'canonical', href: 'https://daniel-ordonez.com/' }
    ]
  },
  data: () => ({
    ready: false,
    posts: [],
    projects: []
  }),
  created () {
    this.$content('blog').only(['title', 'description', 'tags', 'slug']).where({published: true}).limit(7).sortBy('date', 'desc').fetch()
    .then(posts => {
      this.posts = posts
    })
    this.$content('projects').only(['title', 'thumbnail', 'description', 'tags', 'url', 'github']).where({published: true}).limit(7).sortBy('date', 'desc').fetch()
    .then(projects => {
      this.projects = projects
    })
  }
}
</script>

<style>
@import url(~/assets/style/index.css);
</style>

