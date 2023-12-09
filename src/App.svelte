<script>
  // @ts-nocheck
  import { onMount, onDestroy } from "svelte";
  import Bg from "./lib/Bg.svelte";
  import CustomScroll from "./lib/CustomScroll.svelte";
  import Gallery from "./lib/Gallery.svelte";
  import Hero from "./lib/Hero.svelte";
  import ContactLinks from "./lib/ContactLinks.svelte";
  let page = 0;
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
      <!--
      <section>
        <Gallery></Gallery>
      </section>
      -->
    </CustomScroll>
  </div>
</main>
<nav id="menu">
  <div class="menu__content">
    <ContactLinks></ContactLinks>
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
  #menu {
    background-color: rgb(var(--rgb-accent));
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    padding: 0px 20px;
    height: calc(((100vh - 20px) / 10));
    display: flex;
    justify-content: center;
  }
  .menu__content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    --gap: 16px;
  }
  main {
    --margin: 20px;
    --gap: 8px;
  }

  @media (min-height: 786px) {
    #menu {
      --icon-size: 40px;
    }
  }
  @media (min-height: 1024px) {
    #menu {
      --icon-size: 48px;
    }
  }
  /** LIMIT ASPECT RATIO
  */
  @media (max-height: 1024px) {
    .menu__content {
      max-width: 1280px;
    }
  }
  @media (max-height: 768px) {
    .menu__content {
      max-width: 768px;
    }
  }
  @media (max-height: 480px) {
    .menu__content {
      max-width: 480px;
    }
  }
</style>
