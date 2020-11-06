export default {
  computed: {
    lang () {
      let path = this.$route.path.split('/')
      return path.length > 1 && path[1].length === 2 ? path[1] : false
    },
    baseURL () { return this.lang ? `${this.lang}/` : ''}
  },
}
