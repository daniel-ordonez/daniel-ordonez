<script>
  import { onMount } from "svelte";
  import { makeEarth } from "../../../models.mjs";

  onMount(() => {
    const canvas = document.getElementById("canvas");
    //canvas.classList.add("hidden");
    setTimeout(() => {
      canvas.classList.toggle("hidden");
      makeEarth(canvas);
    }, 400);
  });
</script>

<div id="moon">
  <canvas id="canvas" class="hidden"></canvas>
</div>

<style>
  #moon {
    height: 100%;
    width: auto;
    aspect-ratio: 1 / 1;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  #canvas {
    height: 100%;
    width: 100%;
    animation: slide-in 1s ease-in-out both;
    animation-delay: 600ms;
    animation-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
  }
</style>
