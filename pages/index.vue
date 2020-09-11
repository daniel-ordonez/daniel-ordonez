<template>
  <main id="landing">
    <div id="greeting">
      <h1 class="t--display">
           Yo!<br>I'm Daniel
      </h1>
      <div class="t--headline">
        I make digital stuff
      </div>
      <p>
        Learn + Enjoy + Design + Make + Repeat ❤️
      </p>
    </div>
    <div id="featured-posts" class="layout showcase">
      <div class="post--mini" v-for="(post, index) in posts" :key="`post--${index}`">
        <nuxt-link :to="post.slug" class="a--transparent">
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
      <p>
        <strong>tl;dr</strong>
        I'm a web developer, product designer, visual-design enthusiast, and life-long learner from Guatemala born in '95.
      </p>
      <p>
        My closest friends call me Dani (you too can if you want).
      </p>
      <p>
        I like making stuff.
      </p>
      <p>
        Let me explain. When you have a problem to solve and a clear objective, some rules, and an understanding of what you can do, you got yourself a game.
        <br>
        There's a process of exploring, gathering information, finding challenges, building up skills and knowledge, designing a plan, and trying, trying, trying.
      </p>
      <p>
        You win, you lose, you grow, and try again.
      </p>
      <p>
        When you learn to enjoy steps and like the process, eventually you love making stuff.
      </p>
      <h2>Piece of mind</h2>
      <p>I'm just another human being with the privilege of putting my thoughts online.</p>
      <p>
        I like to see myself as a dreamer, a romantic idealist who sees into a world tomorrow far better than it is today.
      </p>
      <p>
        Though I'm aware the world is a mess right now, has been for a long, and probably will be tomorrow.
      </p>
      <p>
        But if ever yone of us strive to improve, even a bit each day, and make today better than yesterday; it might come a day when there's no mess outside.
      </p>
      <p>
        That's how I came up with this ideal:
      </p>
      <blockquote>
        <mark>
        Live always learning, enjoy living, design to improve things, make changes, do today better than yesterday, share the LOVE.
        </mark>
      </blockquote>
      <p>
        Summarized as: <br> Learn + Enjoy + Design + Make + Repeat ❤️
      </p>
    </div>
  </main>
</template>

<script>
import ShapesBg from '~/components/ShapesBg'
import PatternBg from '~/components/PatternBg'
import ColorShapes from '~/components/ColorShapes'
import Avatar from '~/components/Avatar'
export default {
  components: {
    ShapesBg,
    PatternBg,
    ColorShapes,
    Avatar
  },
  data: () => ({
    ready: false,
    posts: []
  }),
  async asyncData (ctx) {
    let posts = await ctx.$content('articles').only(['title', 'description', 'tags', 'slug']).where({published: true}).limit(7).sortBy('date', 'desc').fetch()
    return {posts, ready: true}
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
  background: #FDFDFD;
  background: linear-gradient(to bottom, rgba(255,255,255,0), #FDFDFD);
  padding: 1rem;
}

.layout {
  display: grid;
  column-gap: 16px;
  row-gap: 16px;
  justify-content: center;
}
.layout--mono {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 480px;
  justify-content: center;
}

.post--mini {
  grid-column: 1/-1;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.16), 0 4px 16px 6px rgba(0, 0, 0, 0.02);
  padding: 1rem;
}

.t--display {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
}
.t--headline {
  font-size: 2rem;
  font-weight: 500;
}
svg>*{
  user-select: none;
  pointer-events: none;
}



@media screen and (max-width: 704px){
  .layout {
    grid-template-columns: repeat(4, calc(25% - 12px));
    margin: 0 16px;
  }
  .layout--mono {
    grid-template-columns: 1fr;
  }
  #landing {
    grid-auto-flow: row;
  }
  .t--display {
    font-size: 3rem;
  }
  .t--headline {
    font-size: 1.5rem;
    line-height: 1.6;
  }
}
@media screen and (min-width: 704px){
  .layout {
    grid-template-columns: repeat(4, 138px);
  }
}
@media screen and (min-width: 1036px){
  .layout {
    grid-template-columns: repeat(12, 69px);
  }
}
@media screen and (min-width: 1672px){
  .layout {
    grid-template-columns: repeat(12, 122px);
  }
  .showcase>div:nth-child(1) {
    grid-column: 1/9;
    grid-row: 1 / span 2;
  }
  .showcase>div:nth-child(2),
  .showcase>div:nth-child(3) {
    grid-column: 1 / span 4;
    grid-row: 3 / span 2;
  }
  .showcase>div:nth-child(3) {
    grid-column-start: 5;
  }
  .showcase>div:nth-child(4),
  .showcase>div:nth-child(5),
  .showcase>div:nth-child(6),
  .showcase>div:nth-child(7) {
    grid-column: 9/-1;
  }
}

</style>
