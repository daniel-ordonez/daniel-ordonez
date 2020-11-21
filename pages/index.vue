<template>
  <main class="main-grid" role="main">
    <section class="flex flex--col align-items--center mt--lg">
      <h1 class="t--display mv--0">Yo!<br />I'm Daniel</h1>
      <h2 class="mv--0">I make digital stuff</h2>
      <p>Learn + Enjoy + Create + Share ❤️</p>
    </section>
    <section class="mt--md">
      <social-icons></social-icons>
    </section>
    <featured-posts :posts="posts"></featured-posts>
  </main>
</template>

<script>
import home from "~/assets/classes/home";
export default {
  name: "HomePage",
  extends: home,
};
</script>
