<div id="bg">
  <div class="shapes"></div>
  <div class="blur"></div>

  <!--
  <img
    class="texture texture--dust"
    src="textures/DUST-2.webp"
    alt="dust texture"
  />
  -->
</div>

<!--
<svg class="pattern" width="100%" height="100%">
  <pattern
    id="pattern-circles"
    x="0"
    y="0"
    width="15"
    height="15"
    patternUnits="userSpaceOnUse"
    patternContentUnits="userSpaceOnUse"
  >
    <circle id="pattern-circle" cx="5" cy="5" r="1.6257413380501518" fill="#000"
    ></circle>
  </pattern>
  <rect
    id="rect"
    x="0"
    y="0"
    width="100%"
    height="100%"
    fill="url(#pattern-circles)"
  ></rect>
</svg>
-->

<style>
  #bg {
    overflow: hidden;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: linear-gradient(#d9d9d9, #b2b0b2, #656565);
    --color-overlay: rgba(193, 193, 193, 0.2);
    --color-shape-a: rgba(var(--rgb-gray-2), 0.4);
    --color-shape-b: rgba(var(--rgb-white), 0.2);
  }
  .pattern,
  .blur,
  .shapes {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .pattern {
    --blur: 1px;
    position: absolute;
    opacity: 0.1;
    animation: focus-in-out 10s ease-in-out infinite both;
  }
  .blur {
    z-index: 1;
    position: absolute;
    background-color: var(--color-overlay);
    backdrop-filter: blur(40px);
  }
  .shapes {
    position: absolute;
    overflow: hidden;
    --size: min(1600px, 100vmax);
  }

  .shapes::before,
  .shapes:after {
    position: absolute;
    content: "";
  }
  .shapes::before {
    width: var(--size);
    height: var(--size);
    bottom: 0;
    left: 0;
    --bx: -70%;
    --by: 70%;
    --ox: -20%;
    --oy: 90%;
    transform: translate(-50%, 50%);
    border-radius: 50%;
    background-color: var(--color-shape-a);
    animation: offset-shape-xy 60s ease infinite 5s;
    animation-fill-mode: both;
  }
  .shapes::after {
    width: var(--size);
    height: var(--size);
    top: 0;
    right: 0;
    --bx: 30%;
    --by: -70%;
    --ox: 70%;
    --oy: -20%;
    transform: translate(50%, -50%);
    border-radius: 50%;
    background-color: var(--color-shape-b);
    animation: offset-shape-xy 60s ease infinite;
    animation-fill-mode: both;
  }
  .texture {
    --offsetX: 0;
    --scale: 1;
    z-index: 2;
    position: absolute;
    top: 0%;
    left: 0%;
    min-width: 120vmax;
    min-height: 120vmax;
    mix-blend-mode: screen;
    animation:
      offset-texture 60s ease-in-out infinite both,
      focus-in-out 20s ease-in-out infinite both;
    pointer-events: none;
    transition: all 300ms;
  }
  .texture--dust {
    opacity: 0.5;
  }
  @keyframes focus-in-out {
    0%,
    30%,
    70%,
    100% {
      filter: blur(0px);
      --scale: 1;
    }
    50% {
      filter: blur(var(--blur, 3px));
      --scale: 1.05;
    }
  }
  @keyframes offset-texture {
    from {
      transform: scale(var(--scale)) translateX(-5vmin);
    }
    50% {
      transform: scale(var(--scale)) translateX(5vmin);
    }
    to {
      transform: scale(var(--scale)) translateX(-5vmin);
    }
  }
  @keyframes offset-shape-xy {
    from {
      transform: translate(var(--bx), var(--by)) scale(1);
    }
    50% {
      transform: translate(var(--ox), var(--oy)) scale(1.5);
    }
    to {
      transform: translate(var(--bx), var(--by)) scale(1);
    }
  }
</style>
