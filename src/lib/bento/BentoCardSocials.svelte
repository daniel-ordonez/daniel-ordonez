<script>
  import { onMount } from "svelte";
  import IconBehance from "../../lib/icons/IconBehance.svelte";
  import IconGithub from "../../lib/icons/IconGithub.svelte";
  import IconLinkedin from "../../lib/icons/IconLinkedin.svelte";
  import IconYouTube from "../../lib/icons/IconYouTube.svelte";
  import { Heart } from "../../models.mjs";
  import { supportsHover } from "../../store";

  let card;
  let canvas;
  onMount(() => {
    let heart;
    const onAnimationEnd = () => {
      card.removeEventListener("animationend", onAnimationEnd);
      card.addEventListener("mouseenter", () => {
        heart.rampUpRotation();
      });
    };
    const onAnimationStart = () => {
      card.removeEventListener("animationstart", onAnimationStart);
      heart = new Heart(canvas);
      canvas.style.animation = "grow 1.2s cubic-bezier(0.34, 1.36, 0.64, 1)";

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting }) => {
            heart.rotate(isIntersecting);
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

<div id="card-socials" class="card" bind:this={card}>
  <div class="card__bg">
    <div class="model-container flex justify--center align--center">
      <canvas bind:this={canvas}></canvas>
    </div>
  </div>
  <div class="card__body">
    <div id="social-links">
      <a
        class="social-link"
        href="https://www.behance.net/daniordonez/"
        target="_blank"
      >
        <IconBehance></IconBehance>
      </a>
      <a
        class="social-link"
        href="https://github.com/daniel-ordonez"
        target="_blank"
      >
        <IconGithub></IconGithub>
      </a>
      <a
        class="social-link"
        href="https://www.linkedin.com/in/daniel-adolfo-ordo%C3%B1ez-rubio/"
        target="_blank"
      >
        <IconLinkedin></IconLinkedin>
      </a>
      <a
        class="social-link"
        href="https://www.youtube.com/channel/UCVR7hxJwj8qe1WVCIUXVFJQ"
        target="_blank"
      >
        <IconYouTube></IconYouTube>
      </a>
    </div>
  </div>
</div>

<style>
  #card-socials {
    min-height: 200px;
    height: 100%;
    background-image: linear-gradient(
      -225deg,
      #69eacb -10%,
      #eaccf8 48%,
      #6654f1 110%
    );
    --c-card-color: rgba(250, 250, 250, 1);
  }
  #card-socials,
  #card-socials .card__bg {
    will-change: transform;
  }
  :global(#card-socials.animate) {
    animation: grow 0.9s ease-in-out both;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    animation-delay: 150ms;
    transform-origin: top left;
  }
  #card-socials .card__body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  :global(#card-socials.animate .card__bg) {
    animation: grow 900ms ease-in-out both;
    animation-delay: 500ms;
    animation-timing-function: cubic-bezier(0.34, 1.36, 0.64, 1);
  }
  #social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-self: center;
  }
  .social-link {
    display: inline-block;
    --icon-size: clamp(3rem, 6vw, 5rem);
    --pad: 0.4rem;
    height: calc(var(--icon-size) + (2 * var(--pad)));
    width: auto;
    aspect-ratio: 1 / 1;
    padding: var(--pad);
    border-radius: 0.8rem;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
    will-change: background-color, color, transform;
    transition:
      transform 300ms ease-in-out,
      color 300ms ease-in-out,
      background-color 300ms ease-in-out;
    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  }
  .social-link:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  :global(.social-link:hover svg) {
    filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2));
  }
  @media (max-width: 480px) {
    #social-links {
      gap: 0.5rem;
    }
  }
</style>
