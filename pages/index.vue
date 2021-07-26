<template>
  <main class="main-grid" role="main">
    <section class="flex flex--col align-items--center mt--lg">
      <div></div>
      <h1 class="t--display mv--0">Yo!<br />I'm Daniel</h1>
    </section>
    <section class="mt--md">
      <social-icons></social-icons>
    </section>
    <section>
      <h2 class="t--center t--normal">Illustrator + Developer + Designer</h2>
    </section>
    <!--
    <featured-posts :posts="posts"></featured-posts>
    -->
  </main>
</template>

<script>
import home from "~/assets/classes/home";
export default {
  name: "HomePage",
  extends: home
};
</script>
