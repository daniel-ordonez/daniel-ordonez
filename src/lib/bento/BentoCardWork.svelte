<script>
  import IconArrowDown from "../icons/IconArrowDown.svelte";
  import BtnTextIcon from "../BtnTextIcon.svelte";
  import { onMount } from "svelte";
  import { Earth } from "../../models.mjs";

  let card;
  let canvas;
  onMount(() => {
    // Wait for opening animation to end
    const onAnimationStart = () => {
      card.removeEventListener("animationstart", onAnimationStart);
      const earth = new Earth(canvas);
      canvas.style.animation = "slide-in 1s cubic-bezier(0, 0.55, 0.45, 1)";

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting }) => {
            earth.rotate(isIntersecting);
          });
        },
        { threshold: [0.5] }
      );
      observer.observe(card);
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
    top: 35%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  #card-work {
    --card-bg: #242424;
    --card-color: hsl(0, 0%, 60%);
    --c-btn-color: #242424;
    --c-btn-bg: rgb(250, 250, 250);
    background: radial-gradient(
        ellipse at bottom,
        hsl(0, 0%, 3%) 10%,
        #323232 120%
      ),
      linear-gradient(0deg, #434343, #000000);
    will-change: color;
    transition: color 300ms ease-in-out;
  }
  #card-work:hover {
    --card-color: hsl(0, 0%, 90%);
  }
  #card-work .card__bg {
    filter: hue-rotate(355deg) saturate(0.5);
    transform: scale(1);
    will-change: transform;
    transition: transform 900ms ease-in-out;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  }
  #card-work:hover .card__bg {
    filter: none;
    transform: scale(1.4);
  }
</style>
