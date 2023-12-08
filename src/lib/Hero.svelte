<script>
  import Glitch from "./Glitch.svelte";
  import ContactLinks from "./ContactLinks.svelte";
  const animatePortrait = () => {
    const portrait = document.getElementById("portrait");
    portrait.classList.add("slide-in-right");
  };
</script>

<div id="hero">
  <div class="hero__grid">
    <div id="name-jp" aria-label="img" role="img" class="layer--1">
      <svg viewBox="0 0 60.16 258.22">
        <g>
          <path
            d="m60.16,7.49l-2.5,1.6c-1.41-3.16-3.01-5.8-4.8-7.94l2.24-1.15c1.96,2.56,3.65,5.06,5.06,7.49Z"
          />
          <path
            d="m55.68,7.81l-2.37,1.54c-1.58-2.73-3.39-5.18-5.44-7.36l2.24-1.47c2.65,3.03,4.5,5.46,5.57,7.3Z"
          />
          <path
            d="m34.75,38.34c-4.18-2.73-8.6-5.03-13.25-6.91l3.71-5.63c5.25,2.13,9.9,4.44,13.95,6.91,2.13-3.16,3.75-6.12,4.86-8.9,1.11-2.82,1.66-5.03,1.66-6.66s-.36-2.67-1.09-3.14c-.68-.51-1.86-.77-3.52-.77h-15.23c-1.62,0-2.69.15-3.2.45-.51.26-1.07.92-1.66,1.98-2.52,5.03-7.38,10.9-14.59,17.6l-6.4-3.14c4.91-4.61,8.36-8.26,10.37-10.94,2.05-2.69,3.82-5.97,5.31-9.86.38-1.07.79-1.81,1.22-2.24.43-.47,1.24-.7,2.43-.7h25.09c3.24,0,5.63.75,7.17,2.24,1.58,1.49,2.37,3.84,2.37,7.04s-.96,7.08-2.88,11.65c-1.92,4.57-4.63,9.11-8.13,13.63-3.5,4.52-7.4,8.23-11.71,11.14-4.27,2.86-11.24,5.74-20.93,8.64l-5.25-6.21c13.74-4.05,23.64-9.45,29.7-16.19Z"
          />
        </g>
        <rect x="4.67" y="72.59" width="46.59" height="7.17" />
        <rect x="1.09" y="112.98" width="55.55" height="7.49" />
        <polygon
          points="56.9 189.6 .06 189.6 .06 182.82 24.06 182.82 24.06 144.61 4.61 144.61 4.61 137.89 51.97 137.89 51.97 144.61 32.19 144.61 32.19 182.82 56.9 182.82 56.9 189.6"
        />
        <g>
          <path
            d="m58.37,240.3c-5.03,5.38-9.6,9.32-13.7,11.84-4.1,2.52-9.28,4.54-15.55,6.08l-4.99-7.94c2.3-.3,4.16-.68,5.57-1.15v-46.14h5.89c1.62,0,2.43.32,2.43.96,0,.08-.02.17-.06.26-.21.43-.32,1.88-.32,4.35v38.34c2.52-1.02,4.97-2.35,7.36-3.97,2.43-1.66,5.74-4.4,9.92-8.19l3.46,5.57Z"
          />
          <path
            d="m10.82,205.49c3.46-.04,5.74.02,6.85.19,1.15.13,1.73.34,1.73.64,0,.08-.02.19-.06.32-.3.77-.45,2.28-.45,4.54-.13,10.11-1.07,18.69-2.82,25.73-1.75,7-4.39,13.48-7.94,19.46l-6.91-5.5c4.52-6.83,7.32-13.18,8.38-19.07,1.07-5.93,1.6-12.63,1.6-20.1,0-2.47-.13-4.54-.38-6.21Z"
          />
        </g>
      </svg>
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
    <div id="portrait" class="layer--2">
      <Glitch>
        <img
          on:load={animatePortrait}
          src="imgs/portrait-bw.webp"
          alt="self portrait"
        />
      </Glitch>
    </div>
    <div id="short-bio">
      <div class="bio-wrapper">
        <p class="slide-in-left">
          Graphic designer<br />Web developer<br />Game dev hobbyist<br />based
          in Guatemala
        </p>
        <ContactLinks></ContactLinks>
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
  }
  .hero__grid {
    --cols: 2;
    --rows: 6;
    width: 100vw;
    max-width: 1455px;
    height: 100%;
    max-height: 100vh;
    max-height: 100svh;
    display: grid;
    gap: var(--gap);
    grid-template-columns: 0 repeat(var(--cols), 1fr) 0;
    grid-template-rows: 0 repeat(var(--rows), 1fr) 0;
  }
  #name-jp {
    grid-column: 1;
    grid-row: 1/-1;
  }
  #name-jp svg {
    fill: rgb(var(--rgb-accent));
    height: 100%;
  }
  #display-text {
    grid-column: 2/-2;
    display: flex;
    justify-content: end;
  }
  #display-text {
    grid-row: 2 / 6;
    align-items: end;
  }
  #portrait {
    grid-column: 1/3;
    grid-row-start: 4;
    grid-row-end: -1;
    display: flex;
    align-items: end;
  }
  #portrait img {
    max-height: min(60vh, 480px);
    margin-left: -10vw;
  }
  #short-bio {
    grid-column: 3;
    grid-row: 5 / 7;
    display: flex;
    justify-content: end;
  }
  .bio-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
  #hero svg {
    height: 100%;
  }
  .layer--1 {
    filter: blur(6px);
    opacity: 0.9;
  }
  .layer--2 {
    z-index: 10;
  }

  /** MOBILE
  */
  @media (max-width: 480px) and (orientation: portrait) {
    #portrait img {
      max-height: min(60vh, 480px);
      margin-left: -40vw;
    }
  }
  @media (max-height: 480px) and (orientation: landscape) {
    #display-text {
      grid-row: 2 / 5;
    }
    #portrait {
      grid-row: 1/-1;
    }
    #portrait img {
      max-height: min(90vh, 400px);
      margin-left: -10vw;
    }
    #short-bio {
      justify-content: start;
    }
  }
  /** TABLET SM
  */
  @media (min-width: 480px) and (max-width: 768px) and (orientation: portrait) {
    .hero__grid {
      --cols: 6;
    }
    #display-text {
      grid-row: 3/5;
    }
    #portrait {
      grid-column: 1 / 5;
    }
    #portrait img {
      max-height: min(70vh, 600px);
      margin-left: -30vw;
    }
    #short-bio {
      grid-column: 5 / 8;
      justify-content: start;
    }
  }

  @media (min-height: 480px) {
    .hero__grid {
      --cols: 6;
    }
    #display-text {
      grid-row: 2/5;
    }
    #portrait {
      grid-column: 1/4;
    }
    #portrait img {
      max-height: min(70vh, 600px);
      margin-left: 0;
    }
    #short-bio {
      grid-column: 6 / 8;
      justify-content: start;
    }
  }
  @media (max-height: 480px) and (min-width: 768px) and (orientation: landscape) {
    #portrait {
      grid-row: 2/-1;
    }
    #portrait img {
      max-height: min(100vh, 600px);
      margin-left: 0;
    }
  }
  /** TABLET LG
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    .hero__grid {
      --cols: 6;
    }
    #display-text {
      grid-row: 2/5;
    }
    #portrait {
      grid-column: 1/6;
    }

    #portrait img {
      max-height: min(70vh, 600px);
      margin-left: -10vw;
    }
  }
  /** DESKTOP
  */
  @media (min-width: 1024px) and (orientation: landscape) {
    .hero__grid {
      --cols: 6;
    }
    #portrait img {
      max-height: min(70vh, 800px);
    }
  }

  @media (orientation: landscape) and (max-height: 1024px) {
    .hero__grid {
      max-width: 100vmin;
    }
  }
</style>
