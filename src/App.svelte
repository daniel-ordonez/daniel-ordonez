<script>
  import AppHeader from "./lib/AppHeader.svelte";
  import BentoCardSocials from "./lib/bento/BentoCardSocials.svelte";
  import BentoCardPhoto from "./lib/bento/BentoCardPhoto.svelte";
  import BentoCardWork from "./lib/bento/BentoCardWork.svelte";
  import BnetoCardContact from "./lib/bento/BnetoCardContact.svelte";
</script>

<AppHeader></AppHeader>
<main>
  <div id="bento-grid">
    <section id="main-card">
      <BentoCardPhoto></BentoCardPhoto>
    </section>
    <section>
      <BentoCardWork></BentoCardWork>
    </section>
    <section>
      <BentoCardSocials></BentoCardSocials>
    </section>
    <section>
      <BnetoCardContact></BnetoCardContact>
    </section>
  </div>
</main>

<style>
  main {
    --margin-top: 40px;
    --px: 20px;
    --app-content-w: calc(100vw - (var(--px) * 2));
    display: flex;
    justify-content: center;
    min-height: var(--app-content-h);
    max-width: var(--app-content-w);
    width: 100%;
    margin: 0 auto;
    padding-bottom: var(--header-h);
  }

  #bento-grid {
    --gx: 10px;
    --gy: 10px;
    align-self: center;
    width: 100%;
    max-width: var(--app-content-w);
    display: grid;
    column-gap: var(--gx);
    row-gap: var(--gy);
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    grid-template-rows:
      [margin-start]var(--margin-top) [margin-end cards-start] repeat(2, auto)
      [cards-end];
  }

  /**
    CARD SECTIONS
  */
  :global(section > .card) {
    min-height: 100%;
  }
  #bento-grid > section {
    overflow: hidden;
    animation: grow 900ms ease-in-out both;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    min-height: 100px;
    animation-delay: 150ms;
    position: relative;
  }
  #bento-grid > section:nth-child(1) {
    grid-column: 1 / -1;
    grid-row: span 2;
    transform-origin: center center;
    animation-delay: 0s;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-template-rows: subgrid;
  }
  #bento-grid > section:nth-child(2) {
    grid-column: 1 / -1;
    animation: none;
  }
  #bento-grid > section:nth-child(4) {
    color: #242424;
  }
  #bento-grid > section:nth-child(4) {
    --c-btn-bg: #242424;
    --c-btn-color: rgb(250, 250, 250);
  }
  /**
    SMALL - SCREEN / MOBILE
  */
  @media (max-width: 480px) {
    main {
      --px: 16px;
    }
    #bento-grid > section:nth-child(1) {
      max-height: min(60vh, calc(var(--app-min-h) - var(--header-h)));
    }
  }
  @media (orientation: landscape) and (max-height: 700px) {
    main {
      max-width: 1024px;
    }
  }

  /**
    MID SCREEN / TABLET
  */

  @media (min-width: 1024px) and (max-width: 1280px) {
    #bento-grid {
      grid-template-columns: repeat(4, 1fr);
    }
    #bento-grid > section:nth-child(2) {
      grid-column: span 2;
    }

    #bento-grid > section:nth-child(3),
    #bento-grid > section:nth-child(4) {
      transform-origin: top left;
    }
  }
  /**
    LARGE SCREEN - FULL / DESKTOP
  */
  @media (orientation: landscape) and (min-height: 700px) and (min-width: 1025px) {
    #bento-grid {
      aspect-ratio: 16/9;
      grid-template-columns: repeat(12, 1fr);
      height: auto;
      max-width: 1280px;
      grid-template-rows:
        [margin-start]var(--margin-top) [margin-end cards-start] repeat(2, 1fr)
        [cards-end];
    }
    #bento-grid > section:nth-child(1) {
      grid-column: 1 / span 6;
      grid-row: span 3;
      transform-origin: center center;
    }
    #bento-grid > section:nth-child(2) {
      grid-row: 2;
      grid-column: 7 / span 6;
      transform-origin: bottom left;
    }
    #bento-grid > section:nth-child(3) {
      grid-row: 3;
      grid-column: 7 / span 3;
      transform-origin: top left;
    }
    #bento-grid > section:nth-child(4) {
      grid-row: 3;
      grid-column: 10 / span 3;
      transform-origin: top left;
    }
  }
</style>
