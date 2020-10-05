export default {
  head: {
    link: [
      { rel: 'canonical', hid: 'canonical', href: 'https://daniel-ordonez.com/' }
    ]
  },
  data: () => ({
    lang: false,
    posts: null,
    projects: null
  }),
  mounted () {
    let lang = this.lang || ''

    this.$content(`${lang}blog`).only(['title', 'description', 'tags', 'slug']).where({published: true}).limit(3).sortBy('date', 'desc').fetch()
    .then(posts => {
      this.posts = posts
    })
    this.$content(`projects`).only(['title', 'thumbnail', 'description', 'tags', 'url', 'github']).where({published: true}).limit(3).sortBy('date', 'desc').fetch()
    .then(projects => {
      this.projects = projects
    })

  }
}
