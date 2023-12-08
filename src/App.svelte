<script>
  // @ts-nocheck
  import { onMount, onDestroy } from "svelte";
  import Bg from "./lib/Bg.svelte";
  import CustomScroll from "./lib/CustomScroll.svelte";
  import Gallery from "./lib/Gallery.svelte";
  import Hero from "./lib/Hero.svelte";
  import CurrentDate from "./lib/CurrentDate.svelte";
  let page = 1;
  const getPageMenu = (page) => {
    switch (page) {
      case 0:
        return "Portfolio";
      case 1:
        return "Next 1 /3";
    }
  };
  $: pageMenu = getPageMenu(page);
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
<aside id="date-stamp" class="text--mono">
  <div>
    <CurrentDate></CurrentDate>
  </div>
</aside>
<nav id="menu">
  <div class="hr"></div>
  <div class="menu__btn">
    <div class="text--nowrap">{pageMenu}</div>
    <svg viewBox="0 0 24 24" class="icon">
      <line x1="5" y1="12" x2="19" y2="12"></line><polyline
        points="12 5 19 12 12 19"
      ></polyline>
    </svg>
  </div>
</nav>

<style>
  #date-stamp {
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-100%);
  }
  #date-stamp > * {
    width: 1em;
    overflow: visible;
    transform-origin: center center;
    transform: rotate(90deg);
    color: rgba(var(--rgb-white), 0.8);
  }
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
