<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { hideElements, unhideElements } from "../../utils.mjs";
  import { supportsHover } from "../../store";
  import RingText from "./card-photo/RingText.svelte";

  const dispatch = createEventDispatcher();

  const onImgLoad = (e) => {
    //const img = e.target;
    const revealPhoto = () => {
      const cardPhoto = document.getElementById("card-photo");
      cardPhoto.classList.add("animate");
      unhideElements(["ring-text", "photo", "photo-name"]);

      if ($supportsHover) {
        setTimeout(() => {
          cardPhoto.classList.add("hover");
        }, 2000);
      }
    };
    setTimeout(() => {
      dispatch("imgLoad", revealPhoto);
    }, 200);
  };

  onMount(() => {
    hideElements(["ring-text", "photo", "photo-name"]);
  });
</script>

<div id="card-photo" class="card">
  <div class="card card__bg">
    <div id="ring-text">
      {#each [0, 1, 2] as i (i)}
        <div class="ring-text-wrapper" style="--i:{i};">
          <RingText></RingText>
        </div>
      {/each}
    </div>
  </div>
  <div id="photo">
    <div class="img-wrapper">
      <img
        src="/imgs/portrait-light.webp"
        alt="self portrait"
        srcset=""
        on:load={onImgLoad}
      />
    </div>
    <div id="photo-name" class="card__title">
      <svg viewBox="0 0 627 135" fill="currentColor">
        <path
          d="M0.333334 130V5H42.8333C52.8333 5 61.9074 6.62037 70.0556 9.8611C78.2963 13.1018 85.3796 17.5926 91.3056 23.3333C97.3241 28.9815 101.954 35.6019 105.194 43.1944C108.435 50.787 110.056 58.8889 110.056 67.5C110.056 76.1111 108.435 84.213 105.194 91.8056C101.954 99.3981 97.3241 106.065 91.3056 111.806C85.3796 117.454 78.2963 121.898 70.0556 125.139C61.9074 128.38 52.8333 130 42.8333 130H0.333334ZM24.5 107.5H40.6111C47.6482 107.5 53.8519 106.481 59.2222 104.444C64.5926 102.315 69.0833 99.4444 72.6944 95.8333C76.3981 92.1296 79.1759 87.8704 81.0278 83.0556C82.9722 78.2407 83.9444 73.0556 83.9444 67.5C83.9444 61.9444 82.9722 56.7593 81.0278 51.9444C79.1759 47.037 76.3981 42.7778 72.6944 39.1667C69.0833 35.463 64.5926 32.5926 59.2222 30.5556C53.8519 28.5185 47.6482 27.5 40.6111 27.5H24.5V107.5ZM135.034 130L190.173 0.555556H190.451L245.589 130H220.451L211.145 107.778H168.645L159.339 130H135.034ZM176.978 87.7778H202.812L197.395 75C195.913 71.5741 194.525 68.287 193.228 65.1389C192.025 61.8981 190.867 58.1481 189.756 53.8889C188.738 58.0556 187.626 61.7593 186.423 65C185.219 68.2407 183.876 71.5741 182.395 75L176.978 87.7778ZM378.901 134.167L303.901 59.3056V130H280.568V0.833325L355.568 75.5556V5H378.901V134.167ZM426.401 130V5H452.234V130H426.401ZM559.947 132.5C550.78 132.5 542.216 130.833 534.253 127.5C526.29 124.074 519.253 119.398 513.141 113.472C507.123 107.546 502.401 100.648 498.975 92.7778C495.549 84.9074 493.836 76.4815 493.836 67.5C493.836 58.5185 495.549 50.0926 498.975 42.2222C502.401 34.3519 507.123 27.4537 513.141 21.5278C519.253 15.6018 526.29 10.9722 534.253 7.63889C542.216 4.21296 550.78 2.5 559.947 2.5C569.114 2.5 577.679 4.21296 585.641 7.63889C593.604 10.9722 600.595 15.6018 606.614 21.5278C612.725 27.4537 617.493 34.3519 620.919 42.2222C624.345 50.0926 626.058 58.5185 626.058 67.5C626.058 76.4815 624.345 84.9074 620.919 92.7778C617.493 100.648 612.725 107.546 606.614 113.472C600.595 119.398 593.604 124.074 585.641 127.5C577.679 130.833 569.114 132.5 559.947 132.5ZM559.947 108.333C567.447 108.333 574.206 106.528 580.225 102.917C586.243 99.213 591.012 94.2593 594.53 88.0556C598.141 81.8519 599.947 75 599.947 67.5C599.947 59.9074 598.141 53.0556 594.53 46.9444C591.012 40.7407 586.243 35.8333 580.225 32.2222C574.206 28.5185 567.447 26.6667 559.947 26.6667C552.447 26.6667 545.641 28.5185 539.53 32.2222C533.512 35.8333 528.743 40.7407 525.225 46.9444C521.706 53.0556 519.947 59.9074 519.947 67.5C519.947 75 521.706 81.8519 525.225 88.0556C528.743 94.2593 533.512 99.213 539.53 102.917C545.641 106.528 552.447 108.333 559.947 108.333Z"
        />
      </svg>
    </div>
  </div>
</div>

<style>
  #card-photo {
    grid-row: span 3;
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
    background: none;
    will-change: transform;
  }
  :global(#card-photo.animate) {
    animation: grow 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  /**
    CARD BG
  */
  :global(#card-photo .card__bg) {
    grid-row: 2 / -1;
    background: radial-gradient(#c6cdd5, #f0f1f3 120%);
    background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
    color: white;
  }
  :global(:root[theme="dark"] #card-photo .card__bg) {
    --c-svg: rgba(223, 230, 249, 0.5);
  }
  /**
    RING TEXT
  */
  #ring-text {
    will-change: transform;
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
  }
  .ring-text-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: transform, opacity;
    transition:
      transform 300ms cubic-bezier(0.25, 1, 0.5, 1),
      opacity 300ms ease-out;
    --s: calc(1 - (var(--i) * 0.2));
  }
  @media (hover: hover) {
    :global(#ring-text .ring-text-wrapper:not(:first-child)) {
      opacity: 0;
    }
    :global(#card-photo.hover:hover .ring-text-wrapper) {
      transform: scale(var(--s));
      opacity: var(--s);
    }
    :global(#card-photo.hover:hover .ring-text) {
      transform: scale(1.2);
    }
  }
  @media (hover: none) {
    :global(#card-photo .ring-text-wrapper) {
      transform: scale(var(--s));
      opacity: var(--s);
    }
  }
  :global(:root[theme="dark"] .ring-text) {
    color: #dff4f9;
  }
  :global(#card-photo.animate #ring-text) {
    animation: grow 1200ms ease-in-out both;
    animation-delay: 500ms;
    animation-timing-function: cubic-bezier(0.34, 1.36, 0.64, 1);
  }

  /**
    PHOTO / PHOTO CARD
  */

  #photo {
    grid-row: 1 / -1;
    border-radius: calc(var(--card-radius, 40px) - 3px);
    overflow: hidden;
  }
  .img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: end;
    height: 100%;
    transform-origin: center bottom;
    filter: drop-shadow(-24px 16px 20px rgba(0, 0, 0, 0.2));
    transition: all 400ms ease-in-out;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform, opacity;
  }
  :global(#card-photo.animate .img-wrapper) {
    animation: slide-in 1s ease-in-out both;
    animation-delay: 300ms;
    animation-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
  }

  :global(#card-photo.hover:hover .img-wrapper) {
    filter: drop-shadow(-2px 2px 8px rgba(0, 0, 0, 0.2));
    margin-top: 40px;
    margin-bottom: -40px;
  }
  .img-wrapper > img {
    margin-top: auto;
    max-height: 100%;
    max-width: 150vw;
    position: relative;
  }
  /**
    CARD TITLE
  */

  #photo-name {
    will-change: transform, opacity;
  }
  :global(#card-photo.animate #photo-name) {
    animation: slide-in 1.2s cubic-bezier(0.33, 1, 0.68, 1) both;
    animation-delay: 400ms;
  }
  .card__title {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-size: clamp(40px, 16vw, 140px);
    color: rgba(255, 255, 255, 1);
  }
  .card__title {
    display: flex;
    justify-content: center;
  }
  .card__title > svg {
    max-width: 10ch;
    max-height: 1em;
    width: calc(100% - 2rem);
    will-change: opacity, transform;
    transform: scale(1);
    opacity: 1;
    transition: all 400ms ease-in-out;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  }
  :global(#card-photo.hover:hover .card__title > svg) {
    transform: translateY(100%);
    transform: scale(0.5);
    opacity: 0;
  }
  /**
    SMALL - SCREEN / MOBILE
  */
  @media (orientation: portrait) and (max-width: 480px) {
    #photo {
      aspect-ratio: 7 / 10;
    }
  }
  /**
    TABLET / DESKTOP
  */
  @media (orientation: landscape) and (min-height: 700px) and (min-width: 1025px) {
    .img-wrapper > img {
      transform: scale(1.25);
      padding-top: 12%;
    }
  }
</style>
