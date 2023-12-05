<div id="bg">
  <div class="shapes"></div>
</div>

<style>
  #bg::after,
  .shapes {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  #bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    --color-a: rgba(var(--rgb-white), 0.3);
    --color-b: rgba(var(--rgb-gray-2), 0.8);
    --color-c: rgba(var(--rgb-white), 0.6);
  }
  #bg::after {
    z-index: 1;
    position: absolute;
    content: "";
    background-color: var(--color-a);
    backdrop-filter: blur(32px);
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
    background-color: var(--color-b);
    animation: offset-xy 10s infinite 5s;
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
    background-color: var(--color-c);
    animation: offset-xy 10s infinite;
    animation-fill-mode: both;
  }
  @keyframes offset-xy {
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
