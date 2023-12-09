<script>
  import Glitch from "./Glitch.svelte";
  import CurrentDate from "./CurrentDate.svelte";
  let glitch;
  const animatePortrait = () => {
    const portrait = document.getElementById("portrait");
    portrait.classList.add("slide-in-right");
    window.requestAnimationFrame(() => {
      //glitch.turnON();
    });
  };
</script>

<div id="hero">
  <div class="hero__grid">
    <div id="date-stamp" class="text--mono slide-in-left">
      <div>
        <CurrentDate></CurrentDate>
      </div>
    </div>

    <div id="display-text" class="layer--2">
      <svg viewBox="0 0 829.19 384.56">
        <path
          class="slide-in-down"
          d="m0,4.32h37.44c25.28,0,43.68,1.92,55.2,5.76,11.52,3.68,21.44,9.52,29.76,17.52,8.48,7.84,14.96,17.44,19.44,28.8,4.48,11.36,6.72,24.48,6.72,39.36s-3.36,28.96-10.08,42.24c-6.56,13.12-16,23.44-28.32,30.96-12.16,7.36-30,11.04-53.52,11.04H0V4.32Zm19.92,156h18.24c20.32,0,35.12-1.04,44.4-3.12s17.36-6.08,24.24-12,12.08-13.12,15.6-21.6c3.68-8.64,5.52-18.56,5.52-29.76s-2.16-21.52-6.48-30.96c-4.16-9.6-10.16-17.36-18-23.28-7.84-6.08-17.04-10.08-27.6-12-10.56-2.08-25.68-3.12-45.36-3.12h-10.56v135.84ZM281.07,24.72h-81.6v50.4h80.88v20.16h-80.88v64.32h80.88v20.4h-101.52V4.32h102.24v20.4Zm93.87,18.24c-6.4-8.64-11.84-14.4-16.32-17.28-4.48-3.04-9.76-4.56-15.84-4.56s-10.96,1.92-15.12,5.76c-4,3.84-6,8.8-6,14.88s1.92,11.12,5.76,15.6,12.64,11.84,26.4,22.08c13.92,10.08,24.08,19.6,30.48,28.56,6.4,8.96,9.6,18.4,9.6,28.32,0,12.96-5.04,24.24-15.12,33.84-9.92,9.44-21.52,14.16-34.8,14.16-23.36,0-41.68-13.04-54.96-39.12l17.52-10.08c10.4,19.36,22.08,29.04,35.04,29.04,8.32,0,15.44-2.64,21.36-7.92,5.92-5.28,8.88-11.44,8.88-18.48s-2.48-13.68-7.44-19.92c-4.96-6.4-13.52-14.16-25.68-23.28-12.16-9.28-20.56-16.32-25.2-21.12-4.48-4.8-7.76-9.92-9.84-15.36-2.08-5.44-3.12-10.88-3.12-16.32,0-11.68,4-21.52,12-29.52,8.16-8.16,18.64-12.24,31.44-12.24,9.92,0,18.56,2.56,25.92,7.68,7.36,4.96,14.56,12.4,21.6,22.32l-16.56,12.96Zm70.09,137.04h-20.64V4.32h20.64v175.68Zm216.38-85.92c-.48,28.48-8.8,50.64-24.96,66.48-16,15.84-37.12,23.76-63.36,23.76-30.08,0-54.08-9.2-72-27.6-17.92-18.56-26.88-40.24-26.88-65.04s8.96-46.24,26.88-64.32c17.92-18.24,41.04-27.36,69.36-27.36,15.36,0,29.6,2.88,42.72,8.64,13.28,5.6,26.24,14.24,38.88,25.92l-15.84,15.12c-9.76-9.44-20.32-16.64-31.68-21.6-11.36-5.12-23.04-7.68-35.04-7.68s-23.92,3.2-35.76,9.6c-11.84,6.4-21.12,15.04-27.84,25.92s-10.08,22.64-10.08,35.28c0,19.68,7.36,36.88,22.08,51.6,14.88,14.56,33.44,21.84,55.68,21.84,16.48,0,30.72-4.48,42.72-13.44,12-9.12,19.36-21.52,22.08-37.2h-54.72v-19.92h77.76Zm167.78,85.92h-6.24l-111.36-127.44v127.44h-21.12V4.32h6.24l112.08,129.12V4.32h20.4v175.68Z"
        /><path
          class="slide-in-down"
          d="m378.17,204.56h37.44c25.28,0,43.68,1.92,55.2,5.76,11.52,3.68,21.44,9.52,29.76,17.52,8.48,7.84,14.96,17.44,19.44,28.8,4.48,11.36,6.72,24.48,6.72,39.36s-3.36,28.96-10.08,42.24c-6.56,13.12-16,23.44-28.32,30.96-12.16,7.36-30,11.04-53.52,11.04h-56.64v-175.68Zm19.92,156h18.24c20.32,0,35.12-1.04,44.4-3.12s17.36-6.08,24.24-12,12.08-13.12,15.6-21.6c3.68-8.64,5.52-18.56,5.52-29.76s-2.16-21.52-6.48-30.96c-4.16-9.6-10.16-17.36-18-23.28-7.84-6.08-17.04-10.08-27.6-12-10.56-2.08-25.68-3.12-45.36-3.12h-10.56v135.84Zm261.15-135.6h-81.6v50.4h80.88v20.16h-80.88v64.32h80.88v20.4h-101.52v-175.68h102.24v20.4Zm169.95-20.4l-76.56,180h-5.52l-75.36-180h22.08l56.16,135.12,57.12-135.12h22.08Z"
        /></svg
      >
    </div>
    <div id="portrait">
      <Glitch bind:this={glitch}>
        <!--
        <picture>
          <source
            media="(max-height: 1024px)"
            srcset="imgs/portrait-bw_w_300.webp"
          />
          <source
            media="(min-height: 1024px)"
            srcset="imgs/portrait-bw_w_804.webp 804w"
          />
          <img
            height="100%"
            width="auto"
            style="aspect-ratio: 804/773;"
            on:load={animatePortrait}
            src="imgs/portrait-bw_w_300.webp"
            alt="self portrait"
          />
        </picture>
        -->

        <img
          height="100%"
          width="auto"
          style="aspect-ratio: 804/773;"
          on:load={animatePortrait}
          src="imgs/portrait-bw_w_300.webp"
          srcset="
          imgs/portrait-bw_w_300.webp 300w,
          imgs/portrait-bw_w_300.webp 500w,
          imgs/portrait-bw_w_300.webp 760w,
          imgs/portrait-bw_w_804.webp 804w"
          alt="self portrait"
        />
      </Glitch>
    </div>
    <div id="name-jp" aria-label="img" role="img" class="layer--2">
      <svg viewBox="0 0 37.69 170.57">
        <path
          style="--delay: 4"
          d="m37.28,158.49c-3.32,4.32-9.04,8.64-13.56,10.92-.84.44-1.32.88-1.72,1.16l-3.36-2.76c.2-.76.32-1.84.32-2.92v-23.32c0-1.8-.28-3.36-.28-3.44h5.92c0,.08-.28,1.68-.28,3.48v20.88c3.28-1.4,7.2-4.56,9.92-8.44l3.04,4.44Zm-29.16-16.64c0,4.8-.04,12.4-1.2,15.8-1.08,3.44-3.24,7.12-6.8,9.6l4.88,3.24c3.44-3.04,5.92-7,7.16-11.48,1.04-4.04,1.16-12.48,1.16-17.24,0-1.64.28-3.44.28-3.6h-5.88c.24,1,.4,2.04.4,3.68Z"
        />
        <path
          style="--delay: 3"
          d="m31.84,122.45h-10.64v-16.36h8.48c1.16,0,2.56.08,3.72.2v-5.52c-1.12.16-2.52.28-3.72.28H7.88c-1.08,0-2.76-.12-3.8-.28v5.52c1.04-.12,2.72-.2,3.8-.2h7.76v16.36H5.44c-1.2,0-2.64-.12-3.92-.32v5.76c1.32-.12,2.76-.16,3.92-.16h26.4c.92,0,2.6.04,3.72.16v-5.76c-1.04.12-2.32.32-3.72.32Z"
        />
        <path
          style="--delay: 2"
          d="m10.04,67.21c-1.52,0-3.36.08-4.72.12v-5.8c1.48.16,3.32.24,4.72.24h16.56c1.6,0,3.28-.08,4.44-.24v5.8c-1.16-.04-3.04-.12-4.44-.12H10.04Zm19.92,14.16H7c-1.6,0-3.48-.16-5.04-.24v6.12c1.52-.16,3.44-.28,5.04-.28h22.96c1.16,0,2.96.12,4.4.28v-6.12c-1.36.12-3.08.24-4.4.24Z"
        />
        <path
          style="--delay: 1"
          d="m30.6,22.3l2.96,1.83c-.44.76-.96,1.88-1.32,2.88-1.08,3.21-3.08,7.51-5.93,11.5,1.73,1.23,3.28,2.39,4.45,3.34l-3.8,4.52c-1.09-1.01-2.56-2.24-4.21-3.54-3.52,3.71-8.09,7.12-14.31,9.46l-4.64-4c6.92-2.15,11.39-5.4,14.66-8.72-2.58-1.89-5.2-3.7-7.26-5l3.52-3.64c2.1,1.21,4.66,2.84,7.19,4.54,2.07-2.92,3.8-6.35,4.41-8.86h-11.47c-2.8,3.72-6.51,7.58-10.53,10.36l-4.32-3.32c7-4.32,10.72-9.84,12.72-13.28.6-1,1.48-2.84,1.84-4.2l5.76,1.8c-.96,1.4-1.96,3.24-2.44,4.08,0,.01-.02.03-.02.04h8.14c1.1,0,2.29-.16,3.16-.4-.79-1.49-1.76-3.29-2.64-4.52l3.2-1.32c1,1.48,2.4,4,3.16,5.48l-2.28.97Zm3.84-8.25l-3.16,1.28c1.08,1.52,2.36,3.84,3.2,5.52l3.2-1.36c-.72-1.4-2.2-3.96-3.24-5.44Z"
        />
        <path
          style="--delay: 0"
          d="m2.05.42v7.27H.52V.42h1.54Zm2.21,0v2.76h-1.08V.42h1.08Zm1.12,7.27V2.23h1.44v.96h.06c.11-.32.3-.57.57-.76.27-.18.58-.28.95-.28s.69.09.96.28c.26.18.44.44.53.75h.06c.11-.31.31-.56.6-.75.29-.19.64-.28,1.04-.28.51,0,.92.16,1.24.49.32.32.48.78.48,1.37v3.67h-1.51v-3.37c0-.3-.08-.53-.24-.68-.16-.15-.36-.23-.6-.23-.27,0-.49.09-.64.26-.15.17-.23.4-.23.69v3.33h-1.47v-3.4c0-.27-.08-.48-.23-.64-.15-.16-.35-.24-.6-.24-.17,0-.32.04-.45.13-.13.08-.24.2-.32.35-.08.15-.12.32-.12.53v3.27h-1.51Zm14.04,0h-2.58V.42h2.6c.73,0,1.36.15,1.89.44.53.29.93.7,1.22,1.25.29.54.43,1.19.43,1.95s-.14,1.41-.43,1.95c-.28.54-.69.96-1.23,1.25-.53.29-1.16.44-1.9.44Zm-1.04-1.32h.98c.45,0,.84-.08,1.15-.24.31-.16.55-.42.7-.76.16-.34.24-.79.24-1.33s-.08-.98-.24-1.32c-.16-.34-.39-.59-.7-.75-.31-.16-.69-.24-1.15-.24h-.98v4.64Zm7.26,1.42c-.35,0-.66-.06-.93-.18-.27-.12-.49-.3-.65-.54-.16-.24-.23-.54-.23-.9,0-.3.06-.56.17-.76.11-.21.26-.37.45-.5.19-.13.41-.22.65-.28.25-.06.5-.11.77-.13.32-.03.57-.06.77-.09.19-.03.33-.08.42-.13.09-.06.13-.15.13-.26v-.02c0-.22-.07-.4-.21-.52-.14-.12-.34-.18-.6-.18-.27,0-.49.06-.65.18-.16.12-.27.27-.32.45l-1.4-.11c.07-.33.21-.62.42-.86.21-.24.48-.43.81-.56.33-.13.72-.2,1.15-.2.3,0,.59.04.87.11.28.07.53.18.74.33.22.15.39.34.51.58.13.23.19.51.19.83v3.68h-1.43v-.76h-.04c-.09.17-.2.32-.35.45-.15.13-.32.23-.53.3-.21.07-.44.11-.71.11Zm.43-1.04c.22,0,.42-.04.59-.13.17-.09.3-.21.4-.36.1-.15.15-.32.15-.51v-.58s-.11.06-.2.09c-.08.02-.17.05-.27.07-.1.02-.2.04-.31.05-.1.01-.19.03-.28.04-.18.03-.33.07-.47.12-.13.06-.24.13-.31.23-.07.09-.11.21-.11.36,0,.21.07.36.22.47.15.11.34.16.58.16Zm5.33-2.21v3.15h-1.51V2.23h1.44v.96h.06c.12-.32.32-.57.61-.75.28-.19.63-.28,1.03-.28.38,0,.71.08.99.25.28.17.5.4.66.71.16.31.23.67.23,1.09v3.47h-1.51v-3.2c0-.33-.08-.59-.26-.78-.17-.19-.41-.28-.71-.28-.2,0-.38.04-.54.13-.15.09-.27.22-.36.38-.09.17-.13.37-.13.6Zm4.71,3.15V2.23h1.51v5.45h-1.51Zm.76-6.16c-.22,0-.42-.07-.58-.22-.16-.15-.24-.33-.24-.54s.08-.39.24-.54c.16-.15.35-.23.58-.23s.42.08.58.23c.16.15.24.33.24.54s-.08.39-.24.54c-.16.15-.35.22-.58.22Z"
        />
      </svg>
    </div>
    <div id="short-bio">
      <div class="bio-wrapper slide-in-left">
        <h1>About me</h1>
        <p>
          Graphic designer<br />Web developer<br />Game dev hobbyist<br />based
          in Guatemala
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  #hero {
    height: 100%;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    padding: var(--margin);
    padding-bottom: 0;
  }
  #hero svg {
    height: 100%;
  }
  .hero__grid {
    --cols: 6;
    --rows: 9;
    width: 100vw;
    max-width: 1455px;
    height: 100%;
    max-height: 100vh;
    max-height: 100svh;
    display: grid;
    gap: var(--gap);
    grid-template-columns: repeat(var(--cols), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
  }
  #date-stamp {
    grid-row: 1;
    grid-column: -1 / -4;
    display: flex;
    justify-content: end;
  }
  #name-jp {
    grid-column: 1;
    grid-row: 4/6;
    display: flex;
  }
  #name-jp path {
    animation: slide-in-up 600ms ease-out;
    --path-delay: calc(200ms * var(--delay));
    --base-delay: 1200ms;
    animation-delay: calc(var(--base-delay) + var(--path-delay));
    animation-fill-mode: both;
  }
  #name-jp svg {
    fill: rgb(var(--rgb-accent));
    height: 100%;
  }
  #display-text {
    grid-column: 1/-1;
    grid-row: 2 / 5;
    display: flex;
    justify-content: end;
    align-items: end;
  }
  #short-bio {
    grid-column: -1/-4;
    grid-row: 5 / span 2;
    display: flex;
    justify-content: end;
  }
  .bio-wrapper {
    font-size: 12px;
    line-height: 1;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
  .bio-wrapper h1 {
    font-size: 14px;
    font-weight: bold;
  }

  #portrait {
    grid-column: 1/-3;
    grid-row: 5 / -2;
    display: flex;
    align-items: end;
    justify-content: end;
  }
  #portrait img {
    max-height: min(50vh, 480px);
    margin-right: calc(-15vw - var(--margin));
  }

  @media (orientation: portrait) {
    #display-text {
      align-items: start;
    }
    #display-text svg {
      height: auto;
      width: 100%;
    }
  }
  /** LIMIT ASPECT RATIO
  */
  @media (max-height: 1024px) {
    .hero__grid {
      max-width: 1280px;
    }
  }
  @media (max-height: 768px) {
    .hero__grid {
      max-width: 768px;
    }
  }
  @media (max-height: 480px) {
    .hero__grid {
      max-width: 480px;
    }
  }
  /** MOBILE LANDSCAPE
  */
  @media (max-height: 480px) and (orientation: landscape) {
    #name-jp {
      grid-row-start: 1;
      display: flex;
      justify-content: end;
    }
    #portrait {
      grid-row: 3 / -1;
      justify-content: center;
    }
    #portrait img {
      max-height: min(80vh, 480px);
      margin-left: 0;
    }
  }

  /** TABLET SM
  */
  @media (min-width: 480px) {
    #portrait img {
      max-height: 60vh;
      max-width: 100vw;
    }
    #name-jp {
      justify-content: center;
    }
  }
  @media (min-width: 480px) and (orientation: portrait) {
    #portrait {
      grid-column-end: -1;
      justify-content: start;
    }
    #portrait img {
      margin-right: 10vw;
      margin-left: -10vw;
    }
  }
  @media (min-width: 480px) and (orientation: landscape) {
    #portrait {
      grid-column-end: 5;
    }
    #portrait img {
      max-height: 80vh;
      margin-right: 5vw;
      margin-left: -5vw;
    }
  }
  /** TABLET LG
  */
  @media (min-width: 768px) {
    #name-jp {
      grid-row-start: 2;
    }
    #portrait {
      grid-row-start: 4;
      grid-column-end: -2;
    }
    #portrait img {
      max-height: 70vh;
    }
  }
  @media (min-width: 768px) and (orientation: landscape) {
    #portrait {
      justify-content: start;
      z-index: 1000;
      grid-row-end: -1;
    }
    #portrait img {
      margin-right: 0vw;
      margin-left: 0vw;
    }
  }
  @media (min-width: 786px) and (orientation: portrait) {
    #portrait img {
      margin-right: 10vw;
      margin-left: -10vw;
    }
  }
  @media (min-height: 768px) and (orientation: portrait) {
    .bio-wrapper {
      font-size: 14px;
    }
    .bio-wrapper h1 {
      font-size: 16px;
    }
  }
  @media (min-height: 1024px) and (orientation: portrait) {
    .bio-wrapper {
      font-size: 18px;
    }
    .bio-wrapper h1 {
      font-size: 32px;
    }
  }

  /** DESKTOP
  */
  @media (min-width: 1024px) {
    #portrait {
      grid-row-start: 3;
    }
    #display-text {
      grid-row-end: 6;
    }
    #display-text svg {
      max-width: calc(80vw);
    }
    #short-bio {
      grid-row-start: 6;
    }
  }
</style>
