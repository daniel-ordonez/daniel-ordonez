<template>
  <div class="grid--showcase">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'GridShowcase',
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    lang () {
      return this.$route.name.slice(0, 2) === 'es' ? 'es' : ''
    },
    tail () {
      let slash = this.slash
      let lang = this.lang
      return lang && '/'+lang+'/'
    }
  }
}
</script>

<style>
.grid--showcase .blog-card {
  grid-column: 1 / -1;
}
@media screen and (min-width: 1672px){
  .grid--showcase {
    grid-template-columns: repeat(12, 122px);
    gap: 1rem;
  }
  .grid--showcase>div:nth-child(1) {
    grid-column: 1/9;
    grid-row: 1 / span 2;
  }
  .grid--showcase>div:nth-child(2),
  .grid--showcase>div:nth-child(3) {
    grid-column: 1 / span 4;
    grid-row: 3 / span 2;
  }
  .grid--showcase>div:nth-child(3) {
    grid-column-start: 5;
  }
  .grid--showcase>div:nth-child(4),
  .grid--showcase>div:nth-child(5),
  .grid--showcase>div:nth-child(6),
  .grid--showcase>div:nth-child(7) {
    grid-column: 9/-1;
  }
}
</style>
