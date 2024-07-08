<script>
  // @ts-nocheck

  import Arrow from "./lib/Arrow.svelte";
  import SocialLinks from "./lib/SocialLinks.svelte";
  import ContactForm from "./lib/ContactForm.svelte";
  import BgMovingText from "./lib/BgMovingText.svelte";
  import ToggleTheme from "./lib/ToggleTheme.svelte";

  let dialog;

  const hideContactForm = async () => {
    const el = dialog.firstChild;
    await el.animate(
      {
        opacity: [1, 0],
        transform: ["translateY(0px)", "translateY(50px)"],
      },
      {
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        duration: 500,
      }
    ).finished;
    dialog.close();
  };
  const showContactForm = (e) => {
    e.preventDefault();
    const el = dialog.firstChild;
    el.animate(
      {
        opacity: [0, 1],
        transform: ["translateY(50px)", "translateY(0px)"],
      },
      {
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        duration: 500,
      }
    );
    dialog.showModal();
  };
</script>

<main>
  <BgMovingText></BgMovingText>
  <div class="main__bg">
    <div class="glow-wrapper">
      <div class="glow"></div>
      <div class="glow"></div>
    </div>
  </div>
  <div id="main-grid">
    <div id="photo">
      <img
        class="photo--light"
        src="/imgs/self-full-light.png"
        alt=""
        srcset=""
      />
      <img
        class="photo--dark"
        src="/imgs/self-full-dark.png"
        alt=""
        srcset=""
      />
    </div>
    <div id="subgrid">
      <div id="sitename">daniordonez.com</div>
      <div id="theme">
        <ToggleTheme></ToggleTheme>
      </div>
      <div id="socials">
        <SocialLinks></SocialLinks>
      </div>
      <div id="short-bio">
        <strong>About</strong>
        <div>
          I'm a Visual designer <br />
          & Web developer. <br />
          With ❤️ from 🇬🇹.
        </div>
      </div>
      <div id="menu">
        <!--
        <a href="#" style="--i: 1">
          <div class="link-arrow">
            <Arrow></Arrow>
          </div>
          <big>Blog</big>
        </a>
        <a href="#" style="--i: 2" on:click={showContactForm}>
          <div class="link-arrow">
            <Arrow></Arrow>
          </div>
          <big>Contact</big>
        </a>

        <a href="#" style="--i: 3">
          <div class="link-arrow">
            <Arrow></Arrow>
          </div>
          <big>Portfolio</big>
        </a>
        -->
      </div>
      <div id="name">
        <span>DANIO</span>
      </div>
    </div>
  </div>
</main>
<dialog class="modal" bind:this={dialog}>
  <div>
    <ContactForm on:send={hideContactForm} on:close={hideContactForm}
    ></ContactForm>
  </div>
</dialog>

<style>
  #theme {
    grid-column: -1;
    grid-row: 1 / span 2;
    text-align: right;
    z-index: 100;
  }
  .main__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(12px);
  }
  .main__bg .glow-wrapper {
    position: absolute;
    --s: clamp(30vmin, 40vmax, 80vmin);
    --m: 10vmax;
    height: var(--s);
    width: var(--s);
    top: calc((50vh - (var(--s) / 2)) - var(--m));
    left: calc((40vw - (var(--s) / 2)) - var(--m));
    margin: var(--m);
    animation: grow-in 1.2s cubic-bezier(0.34, 1.26, 0.64, 1) both;
    transform-origin: center center;
  }
  .glow {
    transform-origin: center center;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(
      125deg,
      hsl(var(--hsl-accent)) 15%,
      hsla(var(--hsl-accent), 0)
    );
    opacity: 0.5;
  }
  .glow + .glow {
    animation: breath 8s ease-in-out 1s infinite;
    background: radial-gradient(
      hsl(var(--hsl-accent)) 50%,
      hsla(var(--hsl-accent), 0)
    );
  }
  @keyframes breath {
    from,
    to {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0;
      transform: scale(1.3);
    }
  }
  main {
    --full-height: 100vh;
    --full-width: 100vw;
    --dh: calc(100lvh - 100dvh);
    --pad: clamp(1rem, calc(0.05 * var(--full-width)), 40px);
    width: var(--full-width);
    height: var(--full-height);
    display: flex;
    justify-content: center;
    padding: 0 var(--pad);
    overflow: hidden;
    container-type: size;
    transition: border-radius 400ms cubic-bezier(0.16, 1, 0.3, 1);

    background: radial-gradient(
      var(--bg-c-accent) var(--bg-c-accent-value),
      var(--bg-c-base) var(--bg-c-base-value)
    );
    animation: bg-glow 20s ease-in-out infinite both;
    animation: none;
  }
  #main-grid {
    margin-bottom: auto;
    width: 100%;
    height: 100%;
    max-width: 1420px;
    display: grid;
    grid-template-columns:
      repeat(2, 1fr) repeat(2, min(calc(0.22 * var(--full-width)), 300px))
      repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr) var(--dh);
    gap: 8px;
  }
  #subgrid {
    grid-column: 1 / -1;
    grid-row: 1 / -2;
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
    padding: var(--pad);
  }
  #photo {
    --scale: 1.4;
    --offsetx: 0;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    align-self: flex-end;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: start;
    height: 85vh;
    max-height: var(--full-height);
    max-width: var(--full-width);

    animation: shrink-in 1.2s cubic-bezier(0.34, 1.26, 0.64, 1) both;
    transform-origin: bottom center;
  }
  #photo > img {
    margin-top: 5%;
    height: 100%;
    object-fit: contain;
    object-position: top center;
    filter: drop-shadow(rgba(0, 0, 0, 0.1) 8px 0px 16px);
    transform: scale(var(--scale)) translateX(var(--offsetx));
    transform-origin: top center;
    will-change: transform, margin-top;
    transition: all 700ms cubic-bezier(0.65, 0, 0.35, 1);
  }
  #name {
    grid-column: 1 / span 3;
    grid-row: -3 / span 2;
    animation: slide-in-D 1s cubic-bezier(0.65, 0, 0.35, 1) both;
    display: flex;
    align-items: end;
    white-space: nowrap;
    line-height: 1;
    font-family: Afacad;
    font-variation-settings: "wght" 520;
    font-size: clamp(80px, 18vw, 240px);
    line-height: 0.71;
  }

  #menu {
    grid-column: 5 / -1;
    grid-row: 4 / -1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    font-weight: lighter;
    --base-delay: 600ms;
    --step-delay: 100ms;
    justify-self: end;
    align-items: end;
    row-gap: 0.2em;
  }
  #menu a {
    animation: slide-in-D 0.6s cubic-bezier(0.65, 0, 0.35, 1) both;
    animation-delay: calc(
      var(--base-delay) + (var(--step-delay) * var(--i, 0))
    );
  }
  #menu,
  big {
    font-size: 32px;
  }
  big {
    display: inline-block;
    font-weight: 400;
    margin: 0px;
    will-change: transform;
    transition: all ease-out 200ms;
    line-height: 0.9;
    vertical-align: bottom;
  }

  a {
    line-height: 1;
    position: relative;
  }
  a .link-arrow {
    position: absolute;
    --size: 0.3em;
    height: var(--size);
    width: var(--size);
    right: calc(-1 * (var(--size) + 4px));
    top: calc(-0.2em + var(--size));
    transform-origin: left bottom;
  }
  a::before {
    content: "";
    position: absolute;
    --w: 0;
    --h: 4px;
    bottom: calc(var(--h) * -1);
    bottom: 0;
    left: 0;
    width: var(--w);
    height: var(--h);
    background-color: var(--c-accent);
    transition: all ease-in-out 300ms;
  }
  #menu a:hover:before {
    --w: 100%;
  }
  a:hover {
    cursor: pointer;
  }
  a:hover > big {
    transform: translateY(-0.1em);
  }
  #short-bio {
    grid-column: 1 / span 2;
    grid-row: 3 / span 2;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: end;
    text-align: right;
    animation: slide-in-L 1s cubic-bezier(0.65, 0, 0.35, 1) both;
    animation-delay: 0.6s;
    animation-delay: 0s;
    line-height: 1.4;
    font-size: 14px;
  }
  strong {
    font-size: 48px;
    line-height: 1;
    font-family: Afacad;
    font-weight: 600;
  }
  #socials {
    grid-column: 1 / span 2;
    grid-row: 1;
    display: flex;
    gap: 8px;
    --icon-size: 32px;
    animation: slide-in-R 1s cubic-bezier(0.65, 0, 0.35, 1) both;
    animation-delay: 0s;
  }
  #sitename {
    grid-column: -1;
    grid-row: 1 / -3;
    align-self: start;
    justify-self: end;
    animation: slide-in-D 1s cubic-bezier(0.65, 0, 0.35, 1) both;
    animation-delay: 0s;
    font-family: Afacad, Inter;
    writing-mode: vertical-rl;
    margin-right: -40px;
  }

  @media (max-width: 1024px) {
    #main-grid {
      grid-template-columns: repeat(2, 1fr) repeat(2, min(15vw, 150px)) repeat(
          2,
          1fr
        );
    }
    #photo {
      grid-column: 1 / -1;
      --scale: 1.3;
      --offsetx: 5%;
    }
    #photo > img {
      max-height: 90vh;
      margin-top: 0;
    }
  }
  @media (max-aspect-ratio: 3/4) or (max-width: 600px) {
    #menu,
    big {
      font-size: 32px;
    }
    #main-grid {
      grid-template-columns: 1fr 1fr;
    }
    #name {
      grid-column: 1 / -1;
      grid-row: 4 / span 2;
      line-height: 1;
      font-size: 32px;
      grid-row: 1;
      align-self: start;
    }
    #short-bio {
      grid-column: 1 / -1;
      grid-row: 2;
      align-self: end;
    }
    #short-bio > strong {
      font-size: 32px;
    }
    #socials {
      grid-column: 1/-1;
      grid-row: 3;
      justify-self: end;
      align-self: start;
      --icon-size: 24px;
      --btn-icon-size: 30px;
      animation-delay: 0.6s;
    }
    #photo {
      grid-column: 1 / -1;
      --offsetx: -5%;
      --scale: 1.6;
    }
    #photo > img {
      max-height: 75vh;
      margin-top: 0;
    }
    .main__bg {
      --m: 0;
    }
    .main__bg .glow-wrapper {
      --s: clamp(40vmin, 60vmax, 120vmin);
      left: calc((90vw - (var(--s) / 2)) - var(--m));
      top: calc((15vh - (var(--s) / 2)) - var(--m));
    }
  }

  @media (orientation: landscape) and (max-height: 420px) {
    #menu,
    big {
      font-size: 32px;
    }
    #short-bio {
      grid-row-start: 2;
    }
    #socials {
      --icon-size: 24px;
      --btn-icon-size: 30px;
    }
  }

  @media (prefers-color-scheme: dark) {
    .photo--light {
      display: none;
    }
    .glow-wrapper {
      --hsl-accent: 200, 10%, 18%;
      opacity: 0.6;
    }
    #name > * {
      background: linear-gradient(
        170deg,
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.6)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    :global(:root[theme="light"] .photo--dark) {
      display: none;
    }
    :global(:root[theme="light"] .photo--light) {
      display: block;
    }
    :global(:root[theme="light"] .glow) {
      --hsl-accent: 355, 70%, 48%;
    }
  }

  @media (prefers-color-scheme: light) {
    .photo--dark {
      display: none;
    }
    #name {
      color: white;
    }
    #sitename {
      filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
    }
    :global(:root[theme="dark"] .photo--dark) {
      display: block;
    }
    :global(:root[theme="dark"] .photo--light) {
      display: none;
    }
    :global(:root[theme="dark"] .glow-wrapper) {
      --hsl-accent: 160, 50%, 38%;
      opacity: 0.6;
    }
  }
</style>
