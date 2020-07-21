<template>
  <main id="landing" class="layout">
    <div id="profile-picture">

      <pattern-bg></pattern-bg>
      <color-shapes></color-shapes>
      <div class="avatar-container">
        <avatar/>
        <svg xmlns="http://www.w3.org/2000/svg" class="avatar-hand waving" viewBox="0 0 127.6 132.7">
          <path fill="#f2e0c4" d="M8.8 49c5.1 1.2 7.1 6.5 7.3 7.1.7 1 1.4 2.1 2.1 3.4 1.8 3.2 2.9 6.2 3.5 8.8 0 .2.2.5.4.9.1.2.3.3.4.3.7 0 1.3-2.9 1.9-8.6l6.3-52.8c.6-4.9 5.1-8.5 10-7.9 4.9.6 8.5 5.1 7.9 10L43 57.4c0 .1.5 1.5 1.9 1.9 1.3.4 2.3-.4 2.4-.5C53.6 43.1 59.9 27.5 66.2 12c1.9-4.6 7.1-6.8 11.7-5 4.6 1.9 6.8 7.1 5 11.7L64.5 64.2s.1 1.1 1 1.6c.8.4 1.8.2 2.4-.5 7.8-13.9 15.7-27.8 23.5-41.7 2.4-4.3 7.9-5.9 12.3-3.4 4.3 2.4 5.9 7.9 3.4 12.3L83.4 74.4l30-21.4c4-2.9 9.7-1.9 12.6 2.1 2.9 4 1.9 9.7-2.1 12.6l-26 18.4-10.5 32.7c-3.4 10.5-14.6 16.3-25.2 12.9l-40-12.8c-.9-.3-6.7-2-9.3-7.9-.8-1.8-.7-4.2-.9-9 0-1 0-1.6-.1-5.5 0-2-.1-3.6-.1-4.7C11.3 85 9.7 80 8.4 76.6c-2.3-5.9-5.9-14-7-16.8-.5-1.4-1-3-1-3-.2-.6-.3-1-.3-1.4-.3-1.6.2-3.6 1.2-4.8 2.2-2.8 7.1-1.7 7.5-1.6zm72.8 30.2z"/>
          <path fill="#e3a791" d="M48 104.2c.1 0 .3.1.5.1 1.1.1 2.1-.7 2.2-1.8.2-2.6.4-11.6-6.3-19.3-5.9-6.8-13.5-8.5-16.5-8.9-1.1-.1-2.1.6-2.2 1.7-.1 1.1.6 2.1 1.7 2.2 2.6.3 9 1.7 14 7.5 5.6 6.5 5.5 14.2 5.3 16.3-.2 1.1.4 1.9 1.3 2.2z"/>
        </svg>
      </div>
    </div>
    <div id="profile-greeting">
      <div class="t--display">
           Yo!<br>I'm Daniel
      </div>
      <div class="t--headline">
        I make digital products
      </div>
      <p>
        Learn + Enjoy + Design + Make + Love + Repeat
      </p>
    </div>
    <div class="featured-posts layout">

    </div>
  </main>
</template>

<script>
import PatternBg from '~/components/PatternBg'
import ColorShapes from '~/components/ColorShapes'
import Avatar from '~/components/Avatar'
export default {
  components: {
    PatternBg,
    ColorShapes,
    Avatar
  }
}
</script>

<style>

.layout {
  display: grid;
  column-gap: 16px;
  justify-content: center;
}
#profile-picture {
  height: 500px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-column: 1/-1;
}
#pattern-bg, #color-shapes {
  position: absolute;
  width: 400px;
  height: 400px;
}
#color-shapes {
  transform-origin: center;
  animation: pop-appear .6s;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  animation-delay: .2s;
  animation-fill-mode: backwards;
}
.avatar-container {
  width: 240px;
  height: 240px;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  background: white;
  animation: fade-in .4s;
  animation-timing-function: ease-in-out;
  animation-delay: .4s;
  animation-fill-mode: backwards;
}
.avatar {
  width: 240px;
  height: 240px;
}
.avatar-hand {
  width: 70px;
  height: 70px;
  position: absolute;
  right: -40px;
  bottom: 10%;
  display: block;
  animation: waving .5s ease-in-out infinite alternate;
  transform-origin: 50% 96%;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-duration: .8s;
}
#profile-greeting {
  grid-column: 1/-1;
  align-self: center;
}
#landing .featured-posts {
  grid-column: 1/-1;
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
.flex {
  display: flex;
}
svg>*{
  user-select: none;
  pointer-events: none;
}
@keyframes waving {
  0% {transform: rotate(0deg);}
  50% {transform: rotate(30deg);}
  100% {transform: rotate(0deg);}
}
@keyframes pop-appear {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 704px){
  .layout {
    grid-template-columns: repeat(4, calc(25% - 12px));
    margin: 0 16px;
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
  #landing {
    min-height: 100vh;
    grid-template-rows: minmax(500px, 80vh) 1fr;
  }
  #profile-picture {
    grid-column: 1/5;
  }
  #profile-greeting {
    grid-column: 5/-1;
  }
}
@media screen and (min-width: 1672px){
  .layout {
    grid-template-columns: repeat(12, 122px);
  }
}

</style>
