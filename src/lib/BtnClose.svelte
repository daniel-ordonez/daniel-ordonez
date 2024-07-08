<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const onClick = () => {
    dispatch("close");
  };
</script>

<button class="btn--close" on:click={onClick}>
  <svg viewBox="0 0 34.1 34">
    <polygon
      points="31.9,7.8 26.2,2.2 17,11.4 7.8,2.2 2.2,7.8 11.4,17 2.2,26.2 7.8,31.9 17,22.7 26.2,31.9 31.9,26.2 22.7,17 "
    />
  </svg>
</button>

<style>
  .btn--close {
    all: unset;
    display: block;
    width: 1.5em;
    height: 1.5em;
    align-self: flex-start;
    padding: 1em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: background-color;
    transition: background-color 200ms ease-in-out;
  }
  .btn--close:hover {
    cursor: pointer;
    background-color: hsla(var(--c-form--hsl), 0.3);
  }
  .btn--close > svg {
    height: 1em;
    width: 1em;
  }
</style>
