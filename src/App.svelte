<script>
  // @ts-nocheck
  import Bg from "./lib/Bg.svelte";
  import CustomScroll from "./lib/CustomScroll.svelte";
  import Landing from "./lib/Landing.svelte";
</script>

<Bg></Bg>
<main id="viewport">
  <div>
    <CustomScroll>
      <section>
        <Landing></Landing>
      </section>
      <!--
      <section>
        <Gallery></Gallery>
      </section>
      -->
    </CustomScroll>
  </div>
</main>

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

  main {
    --margin: 20px;
    --gap: 8px;
  }
</style>
