<template>
  <main class="flex flex--col">
    <section id="greeting">
      <h1 class="t--display">Yo!<br>I'm Daniel</h1>
      <h2 class="t--headline">I make digital stuff</h2>
      <p>Learn + Enjoy + Design + Create + Repeat ❤️</p>
    </section>
    <section>
      <social-icons></social-icons>
    </section>
    <div class="container--main">
      <div class="stack--row min-content gap--lg">
        <section v-if="false">
          <h2>Projects</h2>
          <div class="stack--row gap--md" >
            <template v-if="projects">
              <project-card v-for="(project, index) in projects"
                :key="`project-${index}`"
                :project="project"
              />
            </template>
            <template v-else>
              <div class="card project-card flex gap--md" v-for="(_, index) in Array(1)" :key="`project-${index}`">
                <div class="project__thumbnail skeleton">
                </div>
                <div style="width: 100%;">
                  <h3 class="project__title skeleton">empty</h3>
                  <p class="project__description skeleton">empty</p>
                </div>
              </div>
            </template>
          </div>
        </section>
        <top-articles :posts="posts"></top-articles>
      </div>
      <section>
        <about-me></about-me>
      </section>
    </div>
  </main>
</template>

<script>
import home from '~/assets/classes/home'
export default {
  name: 'HomePage',
  extends: home
}
</script>

<style>
@import url(~/assets/style/home.css);
</style>

