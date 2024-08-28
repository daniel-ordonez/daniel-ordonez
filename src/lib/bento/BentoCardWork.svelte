<script>
  /**
   * TODO: Add pin to point GT
   * TODO: Add interaction/ drag to rotate
   */

  import IconArrowDown from "../icons/IconArrowDown.svelte";
  import BtnTextIcon from "../BtnTextIcon.svelte";
  import { onMount } from "svelte";
  import { Earth } from "../../models.mjs";
  import { supportsHover } from "../../store";

  let earth;
  let card;
  let canvas;
  const onMouseEnter = () => {
    earth.zoomOut();
  };
  const onMouseLeave = () => {
    earth.zoomIn();
  };
  onMount(() => {
    // Wait for opening animation to end
    const onAnimationEnd = () => {
      card.classList.add("hover");
      card.removeEventListener("animationend", onAnimationEnd);
      card.addEventListener("mouseenter", onMouseEnter);
      card.addEventListener("mouseleave", onMouseLeave);
    };
    const onAnimationStart = () => {
      card.removeEventListener("animationstart", onAnimationStart);
      earth = new Earth(canvas);
      canvas.style.animation =
        "slide-in 1s cubic-bezier(0, 0.55, 0.45, 1) both";
      canvas.style.animationDelay = "150ms";

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting }) => {
            earth.rotate(isIntersecting);
          });
        },
        { threshold: [0.5] }
      );
      observer.observe(card);

      if ($supportsHover) {
        card.addEventListener("animationend", onAnimationEnd);
      }
    };
    card.addEventListener("animationstart", onAnimationStart);
  });
</script>

<div id="card-work" class="card" bind:this={card}>
  <div class="card__bg">
    <div class="model-container flex justify--center">
      <canvas bind:this={canvas}></canvas>
    </div>
  </div>
  <div class="card__body">
    <h2>
      <span style="white-space: nowrap;">DESIGNER</span>
      <span style="white-space: nowrap;">& DEVELOPER</span>
    </h2>
    <div>Based in GT 🇬🇹.</div>
  </div>
  <div class="card__actions actions--bottom justify--end">
    <BtnTextIcon frost>
      <span slot="label">portfolio</span>
      <IconArrowDown slot="icon"></IconArrowDown>
    </BtnTextIcon>
  </div>
</div>

<style>
  :global(#card-work.animate) {
    animation: slide-in 0.9s ease-in-out both;
    animation-delay: 150ms;
    animation-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
  }
  #card-work .model-container {
    /*
    canvas 640px
    */
    transform: translateY(300px);
    will-change: transform;
    transition: transform 900ms cubic-bezier(0.25, 1, 0.5, 1);
    align-items: center;
  }
  #card-work {
    --c-card-bg: #242424;
    --c-card-color: hsl(0, 0%, 90%);
    --c-btn-color: #242424;
    --c-btn-bg: rgb(250, 250, 250);
    background: radial-gradient(
        ellipse at bottom,
        hsl(0, 0%, 3%) 10%,
        #323232 120%
      ),
      linear-gradient(0deg, #434343, #000000);
    transition: color 300ms ease-in-out;
    will-change: transform, opacity;
  }

  canvas {
    will-change: transform, opacity;
  }
  :global(#card-work.hover:hover .model-container) {
    transform: translateY(0);
  }
  @media (hover: hover) {
    #card-work {
      --c-card-color: hsl(0, 0%, 60%);
    }
    #card-work:hover {
      --c-card-color: hsl(0, 0%, 90%);
    }
  }
</style>
