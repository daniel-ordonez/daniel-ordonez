<script>
  import MovingJap from "./card-photo/MovingJap.svelte";
  import CircleText from "./card-photo/CircleText.svelte";

  let cardReady = false;
  const onImgLoad = (e) => {
    const bg = document
      .getElementById("main-card")
      .querySelector(".moving-jap");
    const photoName = document.querySelector("#photo .card__title");
    const animations = [];
    const animateBG = () => {
      const ani = bg.animate(
        {
          opacity: [0, 1],
        },
        {
          duration: 1200,
          easing: "cubic-bezier(0.33, 1, 0.68, 1)",
          fill: "both",
        }
      );
      ani.finished.then(() => {
        bg.classList.remove("hidden");
      });
    };
    const animatePhotoName = () => {
      const ani = photoName.animate(
        {
          opacity: [0, 1],
          transform: ["translateY(100px)", "translateY(0px)"],
        },
        {
          duration: 1000,
          easing: "cubic-bezier(0.33, 1, 0.68, 1)",
          fill: "both",
        }
      );
      ani.finished.then(() => {
        photoName.classList.remove("hidden");
      });
    };
    setTimeout(animateBG, 600);
    setTimeout(animatePhotoName, 600);
    setTimeout(() => {
      cardReady = true;
    }, 2000);
  };
</script>

<div id="card-photo" class="card {cardReady ? 'ready' : ''}">
  <div class="card card__bg">
    <MovingJap></MovingJap>
    <div id="circle-text">
      <CircleText></CircleText>
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
    <div class="card__title hidden">
      <strong>
        <span>D</span>
        <span>A</span>
        <span>N</span>
        <span>I</span>
        <span>O</span>
      </strong>
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
  }

  /**
    CARD BG
  */
  :global(#card-photo .card__bg) {
    grid-row: 2 / -1;
    background: radial-gradient(#c6cdd5, #f0f1f3 120%);
    background-image: linear-gradient(200deg, #20e2d7 0%, #f9fea5 100%);
    background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
  }

  :global(:root[theme="dark"] #card-photo .card__bg) {
    --c-svg: rgba(255, 255, 255, 0.5);
    --c-svg: rgba(223, 230, 249, 0.5);
  }

  /**
    CIRCLE TEXT
  */
  /*
    */
  #card-photo.ready:hover #circle-text {
    font-size: 4rem;
  }
  #circle-text {
    font-size: 3.5rem;
  }
  :global(#circle-text) {
    position: absolute;
    color: rgba(255, 255, 255, 1);
    top: calc(50% - 1em);
    left: 50%;
    transform: translate(-50%, -50%);
    animation: grow 1200ms ease-in-out both;
    animation-delay: 500ms;
    animation-timing-function: cubic-bezier(0.34, 1.36, 0.64, 1);
    will-change: font-size;
    transition: font-size 300ms ease-in-out;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  }
  :global(:root[theme="dark"] #circle-text) {
    color: #e2f76c;
    color: #ced6ee;
    color: #dff4f9;
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
    animation: slide-in 1s ease-in-out both;
    animation-delay: 300ms;
    animation-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
    will-change: filter, margin;
    transition: all 400ms ease-in-out;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  }
  /*
    */
  #card-photo.ready:hover .img-wrapper {
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
  .card__title > strong {
    font-family: Afacad;
    font-weight: bold;
    font-size: inherit;
    line-height: 0.7;
    color: inherit;
    will-change: opacity, transform;
    transition: all 400ms ease-in-out;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
    transform: scale(1);
    opacity: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 10ch;
    height: 1em;
    margin: 0 auto;
  }
  /*
  #card-photo:hover .card__title {
    bottom: 10px;
  }
*/
  #card-photo.ready:hover .card__title > strong {
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

    #card-photo.ready:hover #circle-text {
      font-size: 3rem;
    }
    #circle-text {
      font-size: 2.5rem;
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

    #card-photo.ready:hover #circle-text {
      font-size: clamp(3rem, 5vw, 4rem);
    }
    #circle-text {
      font-size: clamp(2.5rem, 4vw, 3.5rem);
    }
  }
</style>
