<template>
  <main class="grid-layout">
    <section class="col--all flex flex--col align-items--center">
      <h1 class="mv--0">Yo!<br>I'm Daniel</h1>
      <h2 class="mv--0">I make digital stuff</h2>
      <p>Learn + Enjoy + Create + Share ❤️</p>
    </section>
    <section class="col--all">
      <social-icons></social-icons>
    </section>
    <featured-posts></featured-posts>
  </main>
</template>

<script>
import home from '~/assets/classes/home'
export default {
  name: 'HomePage',
  extends: home
}
</script>
