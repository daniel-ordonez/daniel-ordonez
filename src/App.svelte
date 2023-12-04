<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import Bg from "./lib/Bg.svelte";
  import ContactLinks from "./lib/ContactLinks.svelte";
  const animateImg = ({ target }) => {
    target.classList.add("slide-in-left");
  };

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const days = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
  let fullDate = "";
  const updateToday = () => {
    const today = new Date();
    const month = months[today.getMonth()];
    const day = days[today.getDay()];
    const date = today.getDate().toString().padStart(3, "0");
    const year = today.getFullYear().toString().substring(2).padStart(3, "X");
    fullDate = `${month}•${day}•${date}•${year}`;
  };
  onMount(() => {
    updateToday();
    setInterval(updateToday, 60000);
  });
</script>

<Bg></Bg>
<main>
  <div class="subgrid">
    <div id="name-jp">
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
    <div id="display-design" class="slide-in-down">
      <svg viewBox="0 0 830 185">
        <path
          d="M0.200001 4.91999H37.64C62.92 4.91999 81.32 6.83999 92.84 10.68C104.36 14.36 114.28 20.2 122.6 28.2C131.08 36.04 137.56 45.64 142.04 57C146.52 68.36 148.76 81.48 148.76 96.36C148.76 111.24 145.4 125.32 138.68 138.6C132.12 151.72 122.68 162.04 110.36 169.56C98.2 176.92 80.36 180.6 56.84 180.6H0.200001V4.91999ZM20.12 160.92H38.36C58.68 160.92 73.48 159.88 82.76 157.8C92.04 155.72 100.12 151.72 107 145.8C113.88 139.88 119.08 132.68 122.6 124.2C126.28 115.56 128.12 105.64 128.12 94.44C128.12 83.24 125.96 72.92 121.64 63.48C117.48 53.88 111.48 46.12 103.64 40.2C95.8 34.12 86.6 30.12 76.04 28.2C65.48 26.12 50.36 25.08 30.68 25.08H20.12V160.92ZM281.274 25.32H199.674V75.72H280.554V95.88H199.674V160.2H280.554V180.6H179.034V4.91999H281.274V25.32ZM375.146 43.56C368.746 34.92 363.306 29.16 358.826 26.28C354.346 23.24 349.066 21.72 342.986 21.72C337.066 21.72 332.026 23.64 327.866 27.48C323.866 31.32 321.866 36.28 321.866 42.36C321.866 48.28 323.786 53.48 327.626 57.96C331.466 62.44 340.266 69.8 354.026 80.04C367.946 90.12 378.106 99.64 384.506 108.6C390.906 117.56 394.106 127 394.106 136.92C394.106 149.88 389.066 161.16 378.986 170.76C369.066 180.2 357.466 184.92 344.186 184.92C320.826 184.92 302.506 171.88 289.226 145.8L306.746 135.72C317.146 155.08 328.826 164.76 341.786 164.76C350.106 164.76 357.226 162.12 363.146 156.84C369.066 151.56 372.026 145.4 372.026 138.36C372.026 131.32 369.546 124.68 364.586 118.44C359.626 112.04 351.066 104.28 338.906 95.16C326.746 85.88 318.346 78.84 313.706 74.04C309.226 69.24 305.946 64.12 303.866 58.68C301.786 53.24 300.746 47.8 300.746 42.36C300.746 30.68 304.746 20.84 312.746 12.84C320.906 4.67999 331.386 0.599985 344.186 0.599985C354.106 0.599985 362.746 3.15999 370.106 8.27999C377.466 13.24 384.666 20.68 391.706 30.6L375.146 43.56ZM445.237 180.6H424.597V4.91999H445.237V180.6ZM661.618 94.68C661.138 123.16 652.818 145.32 636.658 161.16C620.658 177 599.538 184.92 573.298 184.92C543.218 184.92 519.218 175.72 501.298 157.32C483.378 138.76 474.418 117.08 474.418 92.28C474.418 67.48 483.378 46.04 501.298 27.96C519.218 9.71999 542.338 0.599985 570.658 0.599985C586.018 0.599985 600.258 3.47999 613.378 9.23999C626.658 14.84 639.618 23.48 652.258 35.16L636.418 50.28C626.658 40.84 616.098 33.64 604.738 28.68C593.378 23.56 581.698 21 569.698 21C557.698 21 545.778 24.2 533.938 30.6C522.098 37 512.818 45.64 506.098 56.52C499.378 67.4 496.018 79.16 496.018 91.8C496.018 111.48 503.378 128.68 518.098 143.4C532.978 157.96 551.538 165.24 573.778 165.24C590.258 165.24 604.498 160.76 616.498 151.8C628.498 142.68 635.858 130.28 638.578 114.6H583.858V94.68H661.618ZM829.394 180.6H823.154L711.794 53.16V180.6H690.674V4.91999H696.914L808.994 134.04V4.91999H829.394V180.6Z"
        />
      </svg>
    </div>
    <div id="display-dev" class="slide-in-down">
      <svg viewBox="-375 0 830 181">
        <path
          d="M0.200001 0.919987H37.64C62.92 0.919987 81.32 2.83999 92.84 6.68C104.36 10.36 114.28 16.2 122.6 24.2C131.08 32.04 137.56 41.64 142.04 53C146.52 64.36 148.76 77.48 148.76 92.36C148.76 107.24 145.4 121.32 138.68 134.6C132.12 147.72 122.68 158.04 110.36 165.56C98.2 172.92 80.36 176.6 56.84 176.6H0.200001V0.919987ZM20.12 156.92H38.36C58.68 156.92 73.48 155.88 82.76 153.8C92.04 151.72 100.12 147.72 107 141.8C113.88 135.88 119.08 128.68 122.6 120.2C126.28 111.56 128.12 101.64 128.12 90.44C128.12 79.24 125.96 68.92 121.64 59.48C117.48 49.88 111.48 42.12 103.64 36.2C95.8 30.12 86.6 26.12 76.04 24.2C65.48 22.12 50.36 21.08 30.68 21.08H20.12V156.92ZM281.274 21.32H199.674V71.72H280.554V91.88H199.674V156.2H280.554V176.6H179.034V0.919987H281.274V21.32ZM451.226 0.919987L374.666 180.92H369.146L293.786 0.919987H315.866L372.026 136.04L429.146 0.919987H451.226Z"
        />
      </svg>
    </div>
    <div id="portrait">
      <img
        on:load={animateImg}
        loading="lazy"
        src="imgs/portrait-bw.webp"
        alt="self portrait"
      />
    </div>

    <div id="date" class="text--mono text--dark">
      <span>{fullDate}</span>
    </div>
    <div id="next-page"></div>
    <div id="short-bio">
      <p class="slide-in-right">
        Graphic designer<br />Web developer<br />Game dev hobbyist<br />based in
        Guatemala
      </p>
      <ContactLinks></ContactLinks>
    </div>
  </div>
  <div></div>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    --bar: 0px;
    --gap: 20px;
    --row-size: calc((100vh - (var(--gap) * 6)) / 7);
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr var(--bar);
  }
  .subgrid {
    height: calc(100vh - var(--bar));
    display: grid;
    grid-template-columns: 0 repeat(2, 1fr) 0;
    grid-template-rows: 0 repeat(7, 1fr);
    gap: var(--gap);
  }

  #name-jp {
    grid-column: 1/3;
    grid-row: 1/-1;
    overflow: visible;
    --blur-max: 12px;
    --blur-min: 6px;
  }
  #name-jp > svg {
    position: absolute;
    height: 100%;
    fill: rgba(var(--rgb-accent), 0.9);
    animation: focus-in-out 9s ease-in-out infinite both;
  }

  #display-design {
    grid-row: 3;
    grid-column: 2/-2;
    display: flex;
    justify-content: end;
    align-items: end;
    overflow: visible;
  }
  #display-dev {
    grid-row: 4;
    grid-column: 2/-2;
    display: flex;
    justify-content: end;
    align-items: end;
  }

  #display-design,
  #display-dev {
    --rows-span: 1;
  }
  #display-design > svg,
  #display-dev > svg {
    height: calc(var(--row-size) * var(--rows-span));
  }
  #portrait {
    display: flex;
    align-items: end;
    justify-content: start;
    grid-column: 2/-2;
    grid-row: 5/-1;
  }
  #portrait > img {
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    margin-left: -20%;
  }
  #date {
    grid-column: 2;
    grid-row: -2/-1;
    display: flex;
    align-items: end;
    opacity: 0.4;
  }
  #short-bio {
    grid-row: 5/-1;
    grid-column: -3;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: start;
    row-gap: 8px;
    font-size: 14px;
  }
  #short-bio > p {
    max-width: 200px;
  }
  @media (min-width: 768px) {
    .subgrid {
      grid-template-columns: 0 repeat(3, 1fr) 0;
    }
    #portrait {
      display: flex;
      align-items: end;
      justify-content: start;
      grid-column: 2/4;
      grid-row: 5/-1;
    }

    #portrait > img {
      margin-left: 0%;
    }
    #short-bio {
      grid-row: 6/-1;
    }
  }
  @media (orientation: landscape) {
    main {
      max-width: 133vh;
    }

    #portrait {
      grid-row: 4/-1;
    }
    #display-design {
      grid-row: 2/4;
    }
    #display-dev {
      grid-row: 4/6;
    }
    #display-design,
    #display-dev {
      --rows-span: 2;
    }
  }
  @keyframes focus-in-out {
    from {
      transform: scale(1);
      filter: blur(var(--blur-max));
    }
    50% {
      transform: scale(0.98);
      filter: blur(var(--blur-min));
    }
    to {
      transform: scale(1);
      filter: blur(var(--blur-max));
    }
  }
  /*
  main {
    --min-h: 720px;
    --s-colgap: 20px;
    --s-rowgap: 20px;
    --s-col4: 300px;
    height: max(100vh, var(--min-h));
    height: max(100dvh, var(--min-h));
    display: grid;
    grid-template-columns: 0 repeat(3, 1fr) 0;
    grid-template-rows: 0 repeat(6, 1fr) 0;
    column-gap: var(--s-colgap);
    row-gap: var(--s-rowgap);
    max-width: 1280px;
    width: 100vw;
    transition: all 600ms ease-in-out;
    z-index: 1;
  }


  #date {
    grid-column: 2;
    grid-row: 3/-2;
    align-self: self-end;
    justify-self: end;
    opacity: 0.3;
  }


  @media (min-width: 1024px) {
    #display-design > svg,
    #display-dev > svg {
      overflow: visible;
      height: 70%;
    }
  }
  @media (max-width: 1024px) {
    main {
      overflow: hidden;
    }
    #display-design > svg,
    #display-dev > svg {
      max-height: 200px;
    }
    #name-jp > svg {
      filter: blur(8px);
    }
  }
  @media (max-width: 768px) {
    main {
      grid-template-columns: 0 repeat(2, 1fr) 0;
    }
    #portrait {
      grid-column: 1/3;
      grid-row: 5/-1;
      justify-content: center;
    }
    #portrait > img {
      margin-left: 0;
    }
    #short-bio {
      grid-column: 3;
      grid-row: 5/8;
      align-items: end;
    }
    #contact-links {
      flex-direction: row-reverse;
    }
    #display-design {
      grid-row: 3;
    }
    #display-dev {
      grid-row: 4;
    }
    #name-jp > svg {
      filter: blur(6px);
    }
  }
 
  */
</style>
