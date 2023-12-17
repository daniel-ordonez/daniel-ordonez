<div id="bg">
  <div class="shapes"></div>
  <div class="blur"></div>
</div>

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
    --color-shape-a: rgba(var(--rgb-white), 0.3);
    --color-shape-b: rgba(var(--rgb-gray-2), 0.6);
  }

  .blur,
  .shapes {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .blur {
    z-index: 1;
    position: absolute;
    background-color: var(--color-overlay);
    backdrop-filter: blur(20px);
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
    animation: offset-shape-xy 30s ease-in-out infinite 5s;
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
    animation: offset-shape-xy 30s ease-in-out infinite;
    animation-fill-mode: both;
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
