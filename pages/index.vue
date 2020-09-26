<template>
  <main id="landing">
    <div id="greeting">
      <h1 class="t--display">
           Yo!<br>I'm Daniel
      </h1>
      <h2 class="t--headline">
        I make digital stuff
      </h2>
      <p>
        Learn + Enjoy + Design + Create + Repeat ❤️
      </p>
    </div>
    <div class="flex justify-content--center">
      <nuxt-link to="es/" class="btn">Ver en español</nuxt-link>
    </div>
    <div id="featured-posts" class="layout" :class="{'showcase': posts.length >= 7}">
      <div class="post--mini" v-for="(post, index) in posts" :key="`post--${index}`">
        <nuxt-link :to="`blog/${post.slug}`" class="a--transparent">
          <h2>{{post.title}}</h2>
          <p>{{post.description}}</p>
        </nuxt-link>
        <div>
          <span v-for="(tag, tag_index) in post.tags" :key="`tag--${tag_index}`">{{tag}}</span>
        </div>
      </div>
    </div>
    <div id="about-me" class="layout--mono">
      <h2>About me</h2>
      <p>Web developer, product design and visual design enthusiast, and live-long learner; from Guatemala, born in '95.</p>
      <p>My friends call me Dani (so you too can if you want)</p>
      <h3>I like crafting stuff.</h3>
      <p>I mostly code, but the idea (itself) of creating something is what appeals to me.</p>
      <p>Like, when you have a problem to solve with a clear objective, some set of rules, and a good understanding of what you can do; then, what you got is basically a game.</p>
      <p>There’ll be a process of exploration, gathering information, finding challenges, building up skills and knowledge, design a plan and try, try, try.</p>
      <p>Sometimes you win, sometimes you lose, you grow and try again.</p>
      <p >When you get the gist of the process and start enjoying the steps, it becomes something you want to do everytime.</p>
      <h3>Piece of mind</h3>
      <p>I like to see myself as a dreamer, some romantic idealist who sees towards a world tomorrow that’s far better than today.</p>
      <p>The world might be a real mess right now, though it has been for quite a while (since day 1) and it most surely will be one tomorrow.</p>
      <p>But if everyone strive to get better, even a little every day, and does tomorrow better than today; it might come the day when there’s no mess outside.</p>
      <p>With that in mind, I came up with this ideal:</p>
      <blockquote>
        <mark>Live learning and ajoying, design to improve, change things, make today better than yesterday and share your love.</mark>
      </blockquote>
        <p>Summarized as:<br>
        Learn+Enjoy+Design+Create+Repeat ❤️
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  head: {
    link: [
      { rel: 'canonical', hid: 'canonical', href: 'https://daniel-ordonez.com/' }
    ]
  },
  data: () => ({
    ready: false,
    posts: []
  }),
  created () {
    this.$content('articles').only(['title', 'description', 'tags', 'slug']).where({published: true}).limit(7).sortBy('date', 'desc').fetch()
    .then(posts => {
      this.posts = posts
    })
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
