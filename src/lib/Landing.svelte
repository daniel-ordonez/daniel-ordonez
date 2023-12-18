<script>
  import CurrentDate from "./CurrentDate.svelte";
  import ContactLinks from "./ContactLinks.svelte";

  const animatePortrait = () => {
    const portrait = document.getElementById("portrait");
    portrait.classList.add("slide-in-right");
  };
</script>

<div id="landing">
  <div class="landing__grid">
    <div class="lines"></div>
    <div id="name-jp" aria-label="img" role="img">
      <svg viewBox="0 0 150 450">
        <path
          style="--delay: 0"
          d="M118.44,29.81l3.08,6.7-1.91.78-.62,3.69c-3.36,19.9-11.23,37.67-23.41,52.84-12.78,15.76-29.4,27.65-49.41,35.34l-5.43,2.09-3.1-4.93-6.96-11.07-4.59-7.3,8.05-3.07c12.16-4.64,22.72-10.86,31.48-18.52-1.57-.88-3.48-1.92-5.86-3.18l-7.64-4.03,5.46-6.69,7.78-9.54,3.66-4.49,5.12,2.71c3.62,1.91,6.27,3.38,8.36,4.59,1.97-3.49,3.67-7.09,5.1-10.85h-23.13c-1.26,1.92-2.64,3.91-4.15,6.01l-.04.05-.04.05c-6.89,9.21-15.32,17.68-25.06,25.15l-4.79,3.68-4.38-4.15-9.08-8.59-5.94-5.63,6.43-5.07c8.36-6.59,15.54-13.83,21.35-21.51,5.71-7.75,10.16-16.24,13.24-25.25l2.24-6.56,6.61,2.11,12.14,3.88,6.97,2.23-2.46,6.89c-.05.14-.1.29-.16.43h22.55c-1.71-2.63-3.6-5.11-5.7-7.48l-5.52-6.23,7.04-4.45.79-.5,4.93-3.11,4,4.24c5.67,6.02,10.04,12.32,12.99,18.73ZM136.12,22.97c-2.94-6.41-7.31-12.72-12.99-18.73l-4-4.24-4.93,3.11-.79.5-7.04,4.45,5.52,6.23c4.05,4.56,7.32,9.54,10,15.22l2.87,6.07,6.21-2.54,1.39-.57,6.82-2.8-3.08-6.7Z"
        />
        <path
          style="--delay: 1"
          d="M34.43,164.12h-7.07v-26.27h95.74v26.27H34.43ZM124.16,201.42H19.22v26.27h112.01v-26.27h-7.07Z"
        />
        <polygon
          style="--delay: 2"
          points="124.16 302.01 88.9 302.01 88.9 264.71 116.02 264.71 123.09 264.71 123.09 257.64 123.09 245.51 123.09 238.44 116.02 238.44 34.43 238.44 27.36 238.44 27.36 245.51 27.36 257.64 27.36 264.71 34.43 264.71 61.55 264.71 61.55 302.01 26.29 302.01 19.22 302.01 19.22 309.08 19.22 321.21 19.22 328.28 26.29 328.28 124.16 328.28 131.23 328.28 131.23 321.21 131.23 309.08 131.23 302.01 124.16 302.01"
        />
        <path
          style="--delay: 3"
          d="M55.42,341.61h7.07v43.33c0,14.09-2.03,25.83-6.03,34.88l-.03.07-.03.07c-4.56,9.78-12.41,18.64-23.32,26.34l-5.26,3.71-4.19-4.89-8.37-9.77-4.94-5.76,6.1-4.52c7.24-5.37,12.28-11.02,14.99-16.79,2.44-5.51,3.73-13.57,3.73-23.32v-43.33h20.28ZM133.87,389.74l-10.61-7.42-5.87-4.1-4.03,5.92c-5.16,7.59-10.94,14.49-17.26,20.62v-65.74h-27.35v98.28l3.7,2.01,8.02,4.36,3.24,1.76,3.3-1.65c8.55-4.27,17.59-10.75,26.85-19.24l.03-.03.03-.03c8.29-7.79,15.59-16.15,21.7-24.87l4.07-5.8-5.81-4.06Z"
        />
      </svg>
      <!--
      <svg viewBox="0 0 100 400">
        <path
          style="--delay: 4"
          d="M33.2,322.12v30.75c0,11.28-1.6,20.37-4.6,27.16-3.4,7.29-9.3,13.98-17.8,19.97l-7.1-8.29c7-5.19,11.9-10.78,14.6-16.57,2.4-5.39,3.7-12.88,3.7-22.27v-30.75h11.2ZM61.7,319.92v62.81c9.9-7.49,18.4-16.57,25.6-27.16l9,6.29c-4.9,6.99-10.8,13.78-17.6,20.17-7.4,6.79-14.6,11.98-21.4,15.38l-6.8-3.69v-73.79h11.2Z"
        />
        <path
          style="--delay: 3"
          d="M84.6,239.15v10.28h-29v43.63h35.9v10.28H8.5v-10.28h35.9v-43.63H15.4v-10.28h69.2Z"
        />
        <path
          style="--delay: 2"
          d="M91.5,203.21v10.28H8.5v-10.28h83ZM84.6,149.29v10.28H15.4v-10.28h69.2Z"
        />
        <path
          style="--delay: 1"
          d="M46.3,48.24c-1,2.8-2.1,5.59-3.3,8.39h31.7l6.5,3.49c-2.7,15.98-8.9,29.96-18.6,42.04-10.2,12.58-23.3,21.97-39.4,28.16l-5.9-9.39c13.6-5.19,24.9-12.48,33.9-21.97.1-.2.2-.3.3-.4-2.4-1.7-4.9-3.29-7.3-4.79-4.8-3.1-9.7-5.79-14.7-8.19l6.7-7.99c4.9,2.5,9.8,5.19,14.6,8.09,2.4,1.5,4.9,3.09,7.3,4.69,4.9-7.19,8.4-14.98,10.6-23.47h-31.1c-1.6,2.6-3.3,5.09-5.1,7.59-5.6,7.49-12.3,14.18-20.1,20.17l-7.7-7.29c7.6-5.99,14-12.48,19.2-19.37,5.3-7.19,9.3-14.88,12.1-23.07l10.3,3.3ZM82,52.64l-5.8,4.09c-2.8-4.89-6.4-9.39-10.7-13.48l5.5-4.19c4.5,3.99,8.2,8.59,11,13.58ZM95.3,52.34l-5.9,4.29c-2.9-4.99-6.4-9.49-10.6-13.48l5.4-4.19c4.8,4.29,8.5,8.79,11.1,13.38Z"
        />
        <path
          style="--delay: 0"
          d="M26.87.37h5.39v24.42h-5.39V.37ZM40.45,10.1h-4.42L38.58.37h4.98l-3.11,9.73ZM46.73,8.03h4.98v2.28h.07c.16-.32.39-.64.69-.97.3-.32.66-.61,1.07-.86.41-.25.89-.46,1.42-.62.53-.16,1.11-.24,1.73-.24,1.17,0,2.22.24,3.13.72.91.48,1.59,1.24,2.06,2.28.6-1.08,1.32-1.85,2.18-2.31.85-.46,1.9-.69,3.14-.69,1.13,0,2.08.19,2.85.57.77.38,1.38.9,1.83,1.55.45.66.77,1.43.97,2.31.2.89.29,1.83.29,2.85v9.9h-5.18v-9.76c0-.78-.17-1.45-.5-2.02-.33-.56-.93-.85-1.78-.85-.6,0-1.1.1-1.5.29-.4.2-.73.47-.97.81-.24.34-.41.75-.52,1.21-.1.46-.16.94-.16,1.45v8.87h-5.18v-8.87c0-.3-.01-.67-.03-1.1-.02-.44-.1-.85-.24-1.24-.14-.39-.36-.72-.67-1-.31-.28-.77-.41-1.36-.41-.67,0-1.21.12-1.62.36s-.73.56-.95.97c-.22.4-.36.86-.43,1.36-.07.51-.1,1.03-.1,1.59v8.35h-5.18V8.03Z"
        />
      </svg>
      -->
    </div>
    <div id="display-text" aria-label="img" role="img">
      <svg width="830" height="385" viewBox="0 0 830 385">
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
      <div class="portrait__img">
        <img
          height="auto"
          width="100%"
          style="aspect-ratio: 3/4;"
          on:load={animatePortrait}
          src="imgs/self-bw.webp"
          srcset="imgs/self-bw-400w.avif 400w, imgs/self-bw-600w.avif 600w, imgs/self-bw-800w.avif 800w"
          sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (min-width: 601px) 800px"
          alt="self portrait"
        />
      </div>
    </div>

    <div id="short-bio">
      <div>
        <h1>About me</h1>
        <p>
          Graphic designer<br />& freelance developer<br />
        </p>
      </div>
    </div>
    <div id="socials">
      <ContactLinks></ContactLinks>
    </div>
    <div id="name-es">
      <div>Daniel Ordoñez</div>
    </div>
    <div id="date" class="text--mono text--dark">
      <div>
        <CurrentDate></CurrentDate>
      </div>
    </div>
  </div>
</div>

<style>
  #landing {
    --ratio-w: 3;
    --ratio-h: 2;
    --ratio: var(--ratio-w) / var(--ratio-h);
    --max-w: 100vw;
    --max-w: 100svw;
    --max-h: 100vh;
    --max-h: 100svh;
    --margin: 50px;
    --content-w: calc(
      (min(calc(100vw - (var(--margin) * 2)), var(--max-w))) -
        (var(--gap, 0) * 2)
    );

    --content-h: calc(
      (min(calc(100vh - (var(--margin) * 2)), var(--max-h))) -
        (var(--gap, 0) * 2)
    );
    height: 100%;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    padding-bottom: 0;
  }
  .landing__grid {
    --cols: 8;
    --rows: 10;
    --pad-col: calc((100vw - var(--content-w)) / 2);
    --pad-row: calc((100vh - var(--content-h)) / 2);
    width: 100vw;
    height: 100%;
    max-height: 100vh;
    max-height: 100svh;
    display: grid;
    gap: var(--gap);

    grid-template-columns: var(--pad-col) repeat(var(--cols), 1fr) var(
        --pad-col
      );
    grid-template-rows: var(--pad-row) repeat(var(--rows), 1fr) var(--pad-row);
    position: relative;
    contain: paint;
  }
  .lines {
    position: absolute;
    left: 0;
    top: 0;
  }
  .lines::after {
    position: absolute;
    content: "";
    width: 100vw;
    --w: 100vw;
    left: 0;
    top: var(--pad-row);
    border-bottom: 1px solid white;
    animation: expand-hor 1s ease-in-out both;
  }
  .lines::before {
    position: absolute;
    content: "";
    height: 100vh;
    --h: 100vh;
    left: var(--pad-col);
    top: 0;
    border-left: 1px solid white;
    animation: expand-ver 1s ease-in-out 300ms both;
  }
  @keyframes expand-hor {
    from {
      width: 0%;
    }
    to {
      width: var(--w);
    }
  }
  @keyframes expand-ver {
    from {
      height: 0%;
    }
    to {
      height: var(--h);
    }
  }
  svg {
    max-height: 100%;
  }
  #name-jp {
    grid-column: 2 / span 2;
    grid-row: 2 / -2;
    color: rgb(var(--rgb-accent));
  }
  #name-jp svg {
    width: auto;
    height: 100%;
  }
  #name-jp path,
  polygon {
    animation: slide-in-up 600ms cubic-bezier(0.39, 0.575, 0.565, 1);
    --path-delay: calc(100ms * var(--delay));
    --base-delay: 0s;
    animation-delay: calc(var(--base-delay) + var(--path-delay));
    animation-fill-mode: both;
  }
  #name-es {
    grid-column: 2 / span 4;
    grid-row: -3;
    display: flex;
    align-items: end;
  }
  #name-es > div {
    color: white;
    white-space: nowrap;
    font-size: 12px;
  }
  #date {
    grid-column: 5 / -2;
    grid-row: 1;
    display: flex;
    align-items: end;
    justify-content: end;
    padding-right: 8px;
    font-size: 12px;
    overflow: hidden;
  }
  #date > div {
    animation: slide-in-down 600ms ease-in-out;
    animation-fill-mode: both;
    animation-delay: 600ms;
  }
  #socials {
    grid-column: 2 / span 2;
    grid-row: -2;
  }
  #display-text {
    position: relative;
    grid-column: 4 / -2;
    grid-row: 2 / span 6;
    display: flex;
    justify-content: end;
    align-items: start;
    padding: 8px;
  }
  #display-text::before {
    --h: 100vh;
    position: absolute;
    content: "";
    border-right: 1px solid white;
    right: 0;
    top: calc(-1 * (var(--pad-row) + var(--gap)));
    height: var(--h);
    animation: expand-ver 1s ease-in-out 600ms both;
  }
  #display-text::after {
    position: absolute;
    content: "";
    border-bottom: 1px solid white;
    bottom: 0;
    left: 50%;
    --w: calc(50% + var(--pad-col) + var(--gap));
    width: var(--w);
    animation: expand-hor 1s ease-in-out 900ms both;
  }
  #display-text svg {
    aspect-ratio: 830/385;
  }

  #portrait {
    grid-column: 3 / -4;
    grid-row: 5 / -1;
    display: flex;
    align-items: end;
    filter: drop-shadow(-20px 0 3px rgba(0, 0, 0, 0.1));
    animation-delay: 600ms;
  }

  .portrait__img {
    max-height: 80vh;
    display: flex;
    align-items: start;
    overflow: hidden;
  }
  #portrait img {
    will-change: transform;
    transition: transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translate3d(0px, 0px, -50px) rotate3d(0, 10, 0, var(--3d-rot));
  }
  #short-bio {
    grid-row: 8 / span 3;
    grid-column: 7 / -2;
    display: flex;
    justify-content: end;
    align-items: start;
    font-size: 12px;
    color: white;
    text-align: right;
    padding-right: 8px;
    animation: slide-in-left 600ms ease-in-out 1s both;
  }
  #short-bio h1 {
    font-weight: bold;
    font-size: 2em;
    line-height: 1;
  }
  #short-bio p {
    font-size: 1em;
    line-height: 1;
  }
  @media (orientation: landscape) {
    #landing {
      --max-w: calc(100vh * var(--ratio));
      --max-w: calc(100svh * var(--ratio));
    }
  }
  @media (orientation: portrait) {
    #landing {
      --max-h: calc(100vw * var(--ratio));
      --max-h: calc(100svw * var(--ratio));
    }
    #name-jp {
      grid-row-start: 4;
      grid-column-end: span 4;
    }
    #display-text {
      grid-column-start: 2;
    }
    #portrait {
      grid-row-start: 4;
      grid-column-end: -2;
    }
    .portrait__img {
      max-height: 60vh;
    }
  }
  @media (min-width: 768px) {
    #date {
      font-size: 16px;
      overflow: hidden;
    }
    #name-es {
      grid-column: 1;
      grid-row: 2/-2;
      display: flex;
      justify-content: end;
      align-items: end;
      padding-right: 0.3em;
    }
    #name-es > div {
      font-size: 16px;
      width: 1em;
      transform: rotate(-90deg);
      word-spacing: 1ch;
      letter-spacing: 0.3ch;
    }
  }
  @media (max-width: 480px) {
    #landing {
      --margin: 10px;
    }
    #short-bio h1 {
      font-size: 1.5em;
    }
    /** MOBILE */
    @media (orientation: portrait) {
      #name-jp {
        grid-row-start: 4;
      }
      #display-text {
        grid-row: 2 / span 3;
      }
      #short-bio {
        grid-row-start: 5;
      }
      #portrait {
        grid-column: 1/-1;
      }
    }
  }
  @media (min-height: 768px) {
    #short-bio {
      font-size: 16px;
    }
  }
</style>
