<template>
  <div class="card project-card flex gap--md">
    <img class="project__thumbnail" :src="project.thumbnail" alt="App icon">
    <a class="transparent" target="_blank" :href="project.github">
      <h3 class="project__title">{{project.title}}</h3>
      <p class="project__description">{{project.description}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>
.project-card {
  padding: 1rem;
}
.project__thumbnail {
  width: 36px;
  height: 36px;
  align-self: center;
}
.project__title {
  font-size: 18px;
  line-height: 24px;
}
.project__description {
  margin: 0;
}
</style>
