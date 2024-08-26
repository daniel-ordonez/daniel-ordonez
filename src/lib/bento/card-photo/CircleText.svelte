<script>
  import { onMount } from "svelte";

  const text = "daniordonez.com - daniordonez.com - daniordonez.com - ";
  let chars = [];
  onMount(() => {
    chars = text.split("");
  });
</script>

<div
  id="circle-text"
  class="circle-text"
  style="--char-count: {Math.max(40, chars.length)};"
>
  {#each chars as char, i}
    <span class="ct-char" style="--char-index:{i};">{char}</span>
  {/each}
</div>

<style>
  .circle-text {
    --character-width: 1;
    --inner-angle: calc((360 / var(--char-count, 1)) * 1deg);
    --radius: calc((var(--character-width) / sin(var(--inner-angle))) * -1ch);
    font-weight: bold;
    font-family: "VT323", monospace, Afacad;
    text-transform: uppercase;
    animation: rotation var(--cycle-duration, 30s) linear infinite;
    transition: font-size 300ms ease-in-out;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
  }
  .ct-char {
    font-weight: inherit;
    font-family: inherit;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    /* 	line-height: 1; */
    transform: translate(-50%, -50%)
      rotate(calc(var(--inner-angle) * var(--char-index)))
      translateY(var(--radius)) scaleY(1);
  }
  @keyframes rotation {
    to {
      rotate: -360deg;
    }
  }
</style>
