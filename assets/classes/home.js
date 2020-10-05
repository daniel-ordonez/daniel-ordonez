export default {
  head: {
    link: [
      { rel: 'canonical', hid: 'canonical', href: 'https://daniel-ordonez.com/' }
    ]
  },
  data: () => ({
    posts: null,
    projects: null
  }),
  mounted () {
    let baseURL = this.baseURL
    this.$content(`${baseURL}blog`).only(['title', 'description', 'tags', 'slug', 'image', 'imageAlt']).where({published: true}).limit(3).sortBy('date', 'desc').fetch()
    .then(posts => {
      this.posts = posts
    })
    /*
    this.$content(`projects`).only(['title', 'thumbnail', 'description', 'tags', 'url', 'github']).where({published: true}).limit(3).sortBy('date', 'desc').fetch()
    .then(projects => {
      this.projects = projects
    })
    */
  },
  computed: {
    lang () {
      let path = this.$route.path.split('/')
      return path.length > 1 && path[1].length === 2 ? path[1] : false
    },
    baseURL () { return this.lang ? `${this.lang}/` : ''}
  }
}
