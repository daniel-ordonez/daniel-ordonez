<template>
  <main id="landing">
    <div id="greeting">
      <h1 class="t--display">
           Hola!<br>Soy Daniel
      </h1>
      <h2 class="t--headline">
        Hago cosas digitales
      </h2>
      <p>
        Aprende + Disfruta + Diseña + Crea + Repite ❤️
      </p>
    </div>
    <div class="flex justify-content--center">
      <nuxt-link to="/" class="btn">Read in english</nuxt-link>
    </div>
    <div id="featured-posts" class="layout" :class="{'showcase': posts.length >= 7}">
      <div class="post--mini" v-for="(post, index) in posts" :key="`post--${index}`">
        <nuxt-link :to="`${tail}${post.slug}`" class="a--transparent">
          <h2>{{post.title}}</h2>
          <p>{{post.description}}</p>
        </nuxt-link>
        <div>
          <span v-for="(tag, tag_index) in post.tags" :key="`tag--${tag_index}`">{{tag}}</span>
        </div>
      </div>
    </div>
    <div id="about-me" class="layout--mono">
      <h2>Sobre mí</h2>
        <p>Desarrollador web, entusiasta del diseño de productos y del diseño visual, y aprendiz de por vida; de Guatemala, nacido en el '95.</p>
        <p>Mis amigos me llaman Dani (así que tú también puedes si quieres)</p>
        <h3>Me gusta "construir" cosas.</h3>
        <p>Mayormente hago código y diseño web, pero la idea (en sí) de crear algo es lo que me atrae.</p>
        <p>Por ejemplo, cuando tienes un problema que resolver con un objetivo claro, un conjunto de reglas y una buena comprensión de lo que puedes hacer; entonces, lo que tienes es básicamente un juego.</p>
        <p>Habrá un proceso de exploración, recopilación de información, búsqueda de desafíos, desarrollo de habilidades y conocimientos, diseño de un plan y varios intentos (prueba, prueba, prueba).</p>
        <p>A veces ganas, a veces pierdes, creces y vuelves a intentarlo.</p>
        <p>Cuando obtiene la esencia del proceso y comienza a disfrutar de los pasos, se convierte en algo que desea hacer siempre.</p>
        <h3>Un pensamiento</h3>
        <p>Me gusta verme a mí mismo como un soñador, un idealista romántico que ve hacia un mundo en el mañana que es mucho mejor que el de hoy.</p>
        <p>El mundo podría ser un verdadero desastre en este momento, aunque lo ha sido durante bastante tiempo (desde el día 1) y seguramente lo será mañana.</p>
        <p>Pero si todos se esfuerzan por mejorar, incluso un poco todos los días, y mañana lo hace mejor que hoy; puede que llegue el día en que no haya desorden afuera.</p>
        <p>Con eso en mente, se me ocurrió este ideal:</p>
      <blockquote>
        <mark>Vive aprendiendo y divirtiéndote, diseña para mejorar, cambiar las cosas, hacer hoy mejor que ayer y compartir tu amor.</mark>
      </blockquote>
        <p>Resumido como:<br>
        Resumido como: Aprender + Disfrutar + Diseñar + Crear + Repetir ❤️
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage-Es',
  head: {
    meta: [
      { hid: 'description', content: 'Desarrollador web, entusiasta del diseño de productos y del diseño visual, y aprendiz de por vida; de Guatemala, nacido en el 95.', name: 'description' }
    ],
    link: [
      { rel: 'canonical', hid: 'canonical', href: 'https://daniel-ordonez.com/es/' }
    ]
  },
  data: () => ({
    ready: false,
    posts: []
  }),
  created () {
    this.$content('es/articles').only(['title', 'description', 'tags', 'slug']).where({published: true}).limit(7).sortBy('date', 'desc').fetch()
    .then(posts => {
      this.posts = posts
    })
  },
  computed: {
    tail (head) {
      let route = this.$route.fullPath
      if (route.charAt(route.length - 1) !== '/') return '/es/'
      else return '/'
    }
  }
}
</script>
<style>
#landing {
  display: flex;
  flex-direction: column;
}
#greeting {
  margin-top: 3rem;
  padding: 1rem;
  align-self: center;
  justify-self: center;
  flex-grow: 1;
}
#about-me {
  padding: 1rem;
}
@media screen and (max-width: 704px){
  #landing {
    grid-auto-flow: row;
  }
}
</style>
