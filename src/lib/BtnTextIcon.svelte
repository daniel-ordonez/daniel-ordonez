<script>
  import { createEventDispatcher } from "svelte";

  export let frost = false;
  const dispatch = createEventDispatcher();
  const onClick = (e) => {
    dispatch("click", e);
  };
</script>

<button
  class="btn btn--text-icon {frost ? 'btn--frost' : ''}"
  on:click={onClick}
>
  <div class="btn-content-wrapper">
    <div class="btn__label">
      <slot name="label"></slot>
    </div>
    <div class="btn__icon">
      <slot name="icon"></slot>
    </div>
  </div>
</button>

<style>
  .btn--frost {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    color: white;
  }
  .btn--text-icon {
    color-scheme: none;
    font-size: 1.25rem;
    --h: 2em;
    --p: 0.2em;
    --r: calc(var(--h) - (2 * var(--p)));
    height: var(--h);
    border-radius: calc(var(--h) / 2);
    border: none;
    outline: none;
    appearance: none;
    padding: var(--p);
  }
  .btn-content-wrapper {
    height: 1.6em;
    display: flex;
  }
  .btn__label {
    padding: 0 0.8em;
    height: 100%;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
  }
  .btn__icon {
    background-color: var(--c-btn-color, inherit);
    color: var(--c-btn-bg, inherit);
    --icon-size: 1em;
    height: 100%;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 480px) {
    .btn--text-icon {
      font-size: 2rem;
    }
  }
</style>
