<template>
  <main id="landing">
    <div id="greeting">
      <h1 class="t--display">
           Hola!<br>Soy Daniel
      </h1>
      <div class="t--headline">
        Hago cosas para el mundo digital
      </div>
      <p>
        Aprende + Disfruta + Diseña + Haz + Repite ❤️
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
      <nuxt-content :document="page"></nuxt-content>
    </div>
  </main>
</template>

<script>
import ShapesBg from '~/components/ShapesBg'
import PatternBg from '~/components/PatternBg'
import ColorShapes from '~/components/ColorShapes'
import Avatar from '~/components/Avatar'
export default {
  name: 'HomeEs',
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
  async created () {
    this.posts = await this.$content('es/articles').only(['title', 'description', 'tags', 'slug']).where({published: true}).limit(7).sortBy('date', 'desc').fetch()
  },
  computed: {
    tail (head) {
      let route = this.$route.fullPath
      if (route.charAt(route.length - 1) !== '/') return '/es/'
      else return '/'
    }
  },
  async asyncData (ctx) {
    let page = await ctx.$content('es/about').fetch()
    return {page, ready: true}
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
