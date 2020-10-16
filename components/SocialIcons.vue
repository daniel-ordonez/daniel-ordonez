<template>
  <div class="social-icons flex justify-content--center gap--sm">
    <a v-for="(item, index) in list" :key="`item-${index}`" class="transparent" :href="item.url" target="_blank" rel="noopener noreferrer">
      <img :src="`/social-icons/${item.icon}.svg`" :alt="item.name">
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  data: () => ({
    list: [
      {name: 'Medium', icon: 'medium', url: 'https://medium.com/@daniel_ordonez'},
      {name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/daniel-adolfo-ordo%C3%B1ez-rubio/'},
      {name: 'Dev.to', icon: 'dev-dot-to', url: 'https://dev.to/danielordonez'},
      {name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/daniel.a.ordonez.r/'},
      {name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/roaderful'},
      /*
      {name: 'RSS', icon: 'rss', url: 'https://daniel-ordonez.com/feed.xml'},
      */

    ]
  })
}
</script>

<style>
.social-icons img {
  width: 24px;
}
</style>
