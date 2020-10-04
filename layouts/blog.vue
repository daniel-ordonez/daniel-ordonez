<template>
  <div id="blog">
    <header class="flex align-items--center gap--sm">
      <home-btn></home-btn>
      <nuxt-link :to="`${lang}blog/`" class="a--transparent">
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
      return path.length > 1 && path[1] === 'es' ? '/es/' : '/'
    }
  }
}
</script>

<style>
.scroll-progress {
  height: .5rem;
  position: sticky;
  bottom: 0;
  background: hsla(0, 0%, 95%, 1);
}
.scroll-progress__bar {
  height: 100%;
  width: var(--progress, 0%);
  background: #4caf50;
  transition: width ease-in .2s;
  will-change: width;
}
</style>
