<script>
  import { onMount, onDestroy } from "svelte";

  let original;
  let before;
  let after;
  let active = false;
  let aspectRation = "";
  const intervals = [];
  const copies = [];

  const makeClipPath = (target, n = 60) => {
    const number = Math.floor(Math.random() * n);
    const points = [];
    let x = 0;
    let y = 0;
    for (let i = 0; i < number; i++) {
      if (i % 2) {
        x = Math.floor(Math.random() * 100);
      } else {
        y = Math.floor(Math.random() * 100);
      }
      points.push(`${x}% ${y}%`);
    }
    target?.style.setProperty("--path", `polygon(${points.join(",")})`);
  };
  const cloneChild = (el) => {
    const copyNode = el.cloneNode(true);
    copyNode.classList.add("clone");
    copies.push(copyNode);
    makeClipPath(copyNode);
    return copyNode;
  };
  const changeClipPaths = () => {
    for (const copyNode of copies) {
      makeClipPath(copyNode);
    }
    makeClipPath(original, 100);
  };
  const deactivate = () => {
    active = false;
  };
  const activate = () => {
    active = true;
    setTimeout(deactivate, 5 * 1000);
  };
  export const turnOFF = () => {
    active = false;
    intervals.map((i) => {
      clearInterval(i);
    });
  };
  export const turnON = () => {
    const child = Array.from(original.children).find((el) => {
      return !el.classList.contains("copies");
    });
    if (!child) return;
    const { height, width } = child.getBoundingClientRect();
    aspectRation = `${width}/${height}`;
    before.prepend(cloneChild(child));
    after.prepend(cloneChild(child));
    changeClipPaths();
    intervals.push(setInterval(changeClipPaths, 5 * 1000));
    intervals.push(setInterval(activate, 15 * 1000));
  };
  onDestroy(() => {
    turnOFF();
  });
  onMount(() => {
    turnON();
  });
</script>

<div class="glitch {active ? 'active' : ''}">
  <div class="original" bind:this={original}>
    <div class="copies before" bind:this={before}></div>
    <slot />
    <div class="copies after" bind:this={after}></div>
  </div>
</div>

<style>
  .glitch {
    max-height: 100%;
    position: relative;
  }
  .original {
    position: relative;
    display: flex;
  }
  .copies {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    overflow-y: hidden;
    display: flex;
  }
  :global(.glitch.active .original > *) {
    clip-path: var(--path);
    animation: paths 7s step-end infinite;
  }

  :global(.glitch.active .copies.before > *) {
    clip-path: var(--path);
    animation:
      opacity 5s step-end infinite,
      styled 7s step-end infinite,
      movement 8s step-end infinite;
  }
  :global(.glitch.active .copies.after > *) {
    clip-path: var(--path);
    animation-delay: 300ms;
    animation:
      opacity 5s step-end infinite,
      blurred 7s step-end infinite,
      movement 8s step-end infinite;
  }

  @keyframes movement {
    0% {
      transform: translate(0, -20px);
    }

    15% {
      transform: translate(10px, 5px);
    }

    60% {
      transform: translate(3px, -15px);
    }

    75% {
      transform: translate(-3px, 10px);
    }

    100% {
      transform: translate(10px, 2px);
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0.1;
    }

    5% {
      opacity: 0.7;
    }

    30% {
      opacity: 0.4;
    }

    45% {
      opacity: 0.6;
    }

    76% {
      opacity: 0.4;
    }

    90% {
      opacity: 0.8;
    }

    1%,
    7%,
    33%,
    47%,
    78%,
    93% {
      opacity: 0;
    }
  }
  @keyframes styled {
    0% {
      filter: blur(3px) sepia(2) saturate(2.5) hue-rotate(310deg);
    }

    20% {
      filter: blur(0) sepia(2) saturate(2.5) hue-rotate(180deg);
    }

    50% {
      filter: blur(2px);
    }

    60% {
      filter: blur(0) sepia(2) saturate(2.5) hue-rotate(310deg);
    }

    90% {
      filter: blur(6px) sepia(2) saturate(2.5) hue-rotate(180deg);
    }
  }
  @keyframes blurred {
    0% {
      filter: blur(3px);
    }

    20% {
      filter: blur(0);
    }

    50% {
      filter: blur(2px);
    }

    60% {
      filter: blur(0);
    }

    90% {
      filter: blur(6px);
    }
  }

  @keyframes paths {
    0%,
    5%,
    30%,
    45%,
    76%,
    90% {
      clip-path: var(--path);
    }

    1%,
    7%,
    33%,
    47%,
    78%,
    93% {
      clip-path: none;
    }
  }
</style>
