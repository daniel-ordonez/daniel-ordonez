<script>
  import * as rive from "@rive-app/canvas-lite";
  import { onMount } from "svelte";
  let btn;
  let canvas;
  let icon;

  export let disabled = false;
  export const updateIcon = () => {
    if (!disabled && icon) {
      icon.resizeDrawingSurfaceToCanvas();
    }
  };
  const sendIconAnimation = (canvas) => {
    icon = new rive.Rive({
      src: "animations/icon-send-fly.riv",
      canvas,
      autoplay: true,
      stateMachines: "SM1",
      animations: "fly",
    });
  };

  /**
   * TODO: stop icon render when not visible\
   */
  const onDisabledStatusChange = (disabled) => {
    requestAnimationFrame(updateIcon);
  };

  onMount(() => {
    sendIconAnimation(canvas);
  });

  $: onDisabledStatusChange(disabled);
</script>

<button
  class="btn btn--text-icon btn--send"
  type="submit"
  bind:this={btn}
  {disabled}
>
  <div class="btn__label">Send message</div>
  <div class="btn__icon">
    <div class="model-container on--enabled">
      <canvas bind:this={canvas}></canvas>
    </div>
    <div class="on--disabled">
      <svg viewBox="0 0 24 24" class="icon icon--stroke">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    </div>
  </div>
</button>
