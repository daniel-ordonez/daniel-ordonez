<template>
  <main class="flex flex--col">
    <section id="greeting">
      <h1 class="t--display">Hola!<br>Soy Daniel</h1>
      <h2 class="t--headline">Hago cosas digitales</h2>
      <p>Aprende + Disfruta + Diseña + Crea + Repite ❤️</p>
    </section>
    <div class="container--main">
      <div class="stack--row min-content gap--lg">
        <section>
          <h2>Proyectos</h2>
          <div class="stack--row gap--md">
            <project-card v-for="(project, index) in projects"
              :key="`project-${index}`"
              :project="project"
            />
          </div>
        </section>
        <section>
          <nuxt-link :to="`${baseURL}blog/`" class="a--transparent">
            <h2>Blog</h2>
          </nuxt-link>
          <div class="stack--row gap--md">
            <blog-card v-for="(post, index) in posts"
            :key="`post-${index}`"
            :post="post"
            baseUrl="/es/"
            />
          </div>
        </section>
      </div>
      <about-me-es/>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage-Es',
  head: {
    meta: [
      { hid: 'description', content: 'Desarrollador web, entusiasta del diseño de productos y del diseño visual, y aprendiz de por vida; de Guatemala, nacido en el 95.', name: 'description' }
    ],
    link: [
      { rel: 'canonical', hid: 'canonical', href: 'https://daniel-ordonez.com/es/' }
    ]
  },
  data: () => ({
    ready: false,
    posts: [],
    projects: []
  }),
  created () {
    this.$content('es/articles').only(['title', 'description', 'tags', 'slug']).where({published: true}).limit(7).sortBy('date', 'desc').fetch()
    .then(posts => {
      this.posts = posts
    })
    this.$content('projects').only(['title', 'thumbnail', 'description', 'tags', 'url', 'github']).where({published: true}).limit(7).sortBy('date', 'desc').fetch()
    .then(projects => {
      this.projects = projects
    })
  },
  computed: {
    baseURL () {
      let path = this.$route.path
      let slash = path.charAt(path.length - 1) === '/'
      return slash ? '' : 'es/'
    }
  }
}
</script>

<style>
@import url(~/assets/style/index.css);
</style>
