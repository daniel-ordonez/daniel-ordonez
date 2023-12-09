<script>
  import { onMount } from "svelte";
  import { debounce, throttle } from "./utils.mjs";
  let scroll;
  let container;
  let content;
  let offsetX;
  let sections = [];
  let blockScroll = false;
  let currentSectionIndex = 0;
  let resizeObserver;

  //UPDATE ON RESIZE DEBOUNCED
  const updateScrollOffset = () => {
    const naturalScrollWidth = Math.max(
      0,
      scroll.getBoundingClientRect().height -
        content.getBoundingClientRect().height
    );
    scroll.style.setProperty("--scroll-offset", `${naturalScrollWidth}px`);
    scroll.style.setProperty("--scroll-width", `${naturalScrollWidth}px`);
  };
  const scrollSectionToView = () => {
    sections[currentSectionIndex]?.scrollIntoView();
  };
  const onScroll = (e) => {
    if (!container || blockScroll) return;
    const threshold = 50;
    const viewport = container.getBoundingClientRect().width;
    const { scrollLeft } = container;
    const panRigth = offsetX < scrollLeft;
    offsetX = scrollLeft;
    if (panRigth && currentSectionIndex < sections.length - 1) {
      const nextSectionIndex = currentSectionIndex + 1;
      const nextSection = sections[nextSectionIndex];
      const { offsetLeft } = nextSection;
      const { width, left } = nextSection.getBoundingClientRect();
      const x = scrollLeft + width - offsetLeft;
      const scrollNext = x > threshold && left < viewport;
      if (scrollNext) {
        currentSectionIndex = nextSectionIndex;
      }
    } else if (currentSectionIndex > 0) {
      const nextSectionIndex = currentSectionIndex - 1;
      const nextSection = sections[nextSectionIndex];
      const { width, left } = nextSection.getBoundingClientRect();
      const x = left + width;
      const scrollNext = x > threshold;
      if (scrollNext) {
        currentSectionIndex = nextSectionIndex;
      }
    }

    scrollSectionToView();
  };
  const onScrollDebounced = debounce(onScroll, 100);
  const onWheel = debounce((e) => {
    if (container) container.scrollLeft += e.deltaY;
  }, 1000 / 24);
  onMount(() => {
    updateScrollOffset();
    window.addEventListener("wheel", onWheel);
    container.addEventListener("scroll", onScrollDebounced);
    offsetX = container?.scrollLeft;
    sections = Array.from(content.children);
    resizeObserver = new ResizeObserver(
      debounce(() => {
        scrollSectionToView();
      }, 300)
    );
    resizeObserver.observe(container);
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        //console.log(entries);
      },
      { root: scroll, threshold: [0.5] }
    );
    sections.map((el) => {
      intersectionObserver.observe(el);
    });
    window
      .matchMedia("(orientation: landscape)")
      .addEventListener("change", ({ matches }) => {
        window.requestAnimationFrame(updateScrollOffset);
      });
  });
</script>

<div class="custom-scroll" bind:this={scroll}>
  <div class="wrapper">
    <div class="scroll-container" bind:this={container}>
      <div class="scroll__content" bind:this={content}>
        <slot />
      </div>
    </div>
  </div>
</div>

<style>
  .custom-scroll {
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    --scroll-width: 0px;
    --scroll-offset: 40px;
  }
  .wrapper {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: calc(100% + var(--scroll-offset));
  }
  .scroll-container {
    overflow-x: scroll;
    overflow-y: hidden;
    height: 100%;
    scroll-behavior: smooth;
    padding-bottom: calc(var(--scroll-offset) - var(--scroll-width));
  }
  .scroll__content {
    min-width: 100%;
    height: 100%;
    display: grid;
    grid-auto-flow: column;
  }
</style>
