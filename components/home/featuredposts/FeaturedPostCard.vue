<template>
  <div class="featured-post-card">
    <div class="card__content">
      <div class="bold">{{ post.title }}</div>
      <div>{{ post.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedPostCard',
  props: {
    post: {
      type: Object,
    },
  },
}
</script>

<style>
.featured-post-card {
  box-shadow: var(--shadow--card);
  padding: var(--spacing--sm);
}
.featured-post-card
.card-thumbnail--sm {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}
</style>