<script>
  // @ts-nocheck
  import { onMount, onDestroy } from "svelte";
  import Bg from "./lib/Bg.svelte";
  import CustomScroll from "./lib/CustomScroll.svelte";
  import Gallery from "./lib/Gallery.svelte";
  import Hero from "./lib/Hero.svelte";
</script>

<Bg></Bg>
<main id="viewport">
  <div>
    <CustomScroll>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <Gallery></Gallery>
      </section>
    </CustomScroll>
  </div>
</main>
<nav id="menu">
  <div class="hr"></div>
  <div class="menu__btn">
    <div>Portfolio</div>
    <svg viewBox="0 0 24 24" class="icon">
      <line x1="5" y1="12" x2="19" y2="12"></line><polyline
        points="12 5 19 12 12 19"
      ></polyline>
    </svg>
  </div>
</nav>

<style>
  #viewport {
    height: 100vh;
    height: 100dvh;
    width: 100vw;
    display: flex;
    align-items: end;
  }
  #viewport > div {
    height: 100vh;
    height: 100svh;
    width: 100vw;
  }
  section {
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hr {
    width: 100%;
    height: 0px;
    border-top: 1px solid currentColor;
  }
  #menu {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    padding: 16px 50px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .menu__btn {
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
