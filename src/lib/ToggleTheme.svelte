<script>
  import { onMount } from "svelte";
  import { colorScheme, theme } from "../store";
  import IconSun from "./icons/IconSun.svelte";
  import IconMoon from "./icons/IconMoon.svelte";
  let darkMode = false;
  const toggle = () => {
    darkMode = !darkMode;
    $theme = darkMode ? "dark" : "light";
  };

  theme.subscribe((colorScheme) => {
    document.documentElement.setAttribute("theme", colorScheme);
  });
  colorScheme.subscribe((systemTheme) => {
    console.log(systemTheme);
    if (!$theme) {
      darkMode = systemTheme === "dark";
    }
  });
</script>

<button
  class="toggle {darkMode ? 'toggle--on' : 'toggle--off'}"
  on:click={toggle}
>
  <div class="toggle__frame">
    <div class="toggle__label">
      {darkMode ? "Dark" : "Light"}
    </div>
    <div class="toggle__icon">
      <div class="icon-wrapper">
        {#if darkMode}
          <IconMoon></IconMoon>
        {:else}
          <IconSun></IconSun>
        {/if}
      </div>
    </div>
  </div>
</button>

<style>
  .toggle {
    --h: 3em;
    --p: 0.3em;
    --r: calc(var(--h) - (2 * var(--p)));
    height: var(--h);
    width: auto;
    aspect-ratio: 7/3;
    border-radius: calc(var(--h) / 2);
    border: none;
    outline: none;
    appearance: none;
    background-color: hsla(200, 5%, 100%, 0.2);
    backdrop-filter: blur(8px);
    margin: 0;
    padding: var(--p);
  }
  .toggle > * {
    user-select: none;
  }
  .toggle__frame {
    height: 100%;
    width: 100%;
    position: relative;
    --o: calc(100% - var(--r));
  }
  .toggle__icon {
    height: 100%;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .toggle__icon > .icon-wrapper {
    --icon-size: 24px;
  }
  .toggle__label {
    height: var(--r);
    width: calc(100% - var(--r));
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: var(--r);
  }
  .toggle__icon,
  .toggle__label {
    will-change: left;
    transition: left ease-in-out 300ms;
  }
  .toggle--on .toggle__icon {
    left: var(--o);
  }
  .toggle--on .toggle__label {
    left: 0;
  }
</style>
