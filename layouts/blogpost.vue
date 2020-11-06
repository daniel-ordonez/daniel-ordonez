<template>
  <div id="blog">
    <header class="flex align-items--center gap--sm">
      <home-btn></home-btn>
      <nuxt-link :to="`/${baseURL}blog/`" class="transparent">
        <strong class="t--h3">
          /blog
        </strong>
      </nuxt-link>
      <span></span>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'BlogLayout',
  mounted () {
    var utterances = document.createElement("script")
    utterances.src = "https://utteranc.es/client.js"
    utterances.setAttribute('repo', 'daniel-ordonez/daniel-ordonez')
    utterances.setAttribute('issue-term', 'pathname')
    utterances.setAttribute('theme', 'github-light')
    utterances.setAttribute('crossorigin', 'anonymous')
    utterances.async = true
    utterances.defer = true
    function loadError(oError) {
      throw new URIError("The script " + oError.target.src + " didn't load correctly.");
    }
    utterances.onerror = loadError
    this.$el.appendChild(utterances)
  },
  computed: {
    lang () {
      let path = this.$route.path.split('/')
      return path.length > 1 && path[1].length === 2 ? path[1] : false
    },
    baseURL () { return this.lang ? `${this.lang}/` : ''}
  }
}
</script>
