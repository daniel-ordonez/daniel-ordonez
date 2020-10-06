<template>
  <main class="flex flex--col">
    <section id="greeting">
      <h1 class="t--display">Hola!<br>Soy Daniel</h1>
      <h2 class="t--headline">Hago cosas digitales</h2>
      <p>Aprende + Disfruta + Diseña + Crea + Repite ❤️</p>
    </section>
    <div class="container--main">
      <div class="stack--row min-content gap--lg">
        <section v-if="false">
          <h2>Proyectos</h2>
          <div class="stack--row gap--md">
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
        <top-articles :baseURL="baseURL" :posts="posts"></top-articles>
      </div>
      <about-me-es/>
    </div>
  </main>
</template>

<script>
import home from '~/assets/classes/home'
export default {
  name: 'HomePage-Es',
  extends: home,
  head: {
    meta: [
      { hid: 'description', content: 'Desarrollador web, entusiasta del diseño de productos y del diseño visual, y aprendiz de por vida; de Guatemala, nacido en el 95.', name: 'description' }
    ],
    link: [
      { rel: 'canonical', hid: 'canonical', href: 'https://daniel-ordonez.com/es/' }
    ]
  }
}
</script>

<style>
@import url(~/assets/style/home.css);
</style>
