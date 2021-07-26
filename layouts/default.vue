<template>
  <div id="app">
    <header class="pa--md">
      <div class="grid place-items--center">
        <home-btn></home-btn>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.name;
    },
    esp() {
      return this.routeName === "es";
    }
  }
};
</script>
