<script>
  import * as rive from "@rive-app/canvas-lite";
  import { onMount } from "svelte";
  import IconMail from "../icons/IconMail.svelte";

  let canvas;

  onMount(() => {
    let loopTimeout = null;
    let loopAnimation = false;
    const r = new rive.Rive({
      src: "animations/mailbox.riv",
      canvas,
      autoplay: false,
      layout: new rive.Layout({ fit: rive.Fit.Cover }),
      stateMachines: "SM1",
      animations: "mail_in",
    });
    const clearLoopTimeout = () => {
      clearTimeout(loopTimeout);
      loopTimeout = null;
    };
    const playMailAnimation = () => {
      if (loopTimeout) clearLoopTimeout();
      r.play("mail_in");
    };
    const setLoopTimeout = () => {
      if (loopAnimation) {
        loopTimeout = setTimeout(playMailAnimation, 2000);
      }
    };
    const listenToMouseEnter = () => {
      canvas.addEventListener("mouseenter", () => {
        loopAnimation = true;
        // check animation is not playing
        if (!r.isPlaying) {
          playMailAnimation();
        }
      });
      canvas.addEventListener("mouseleave", () => {
        loopAnimation = false;
        clearLoopTimeout();
      });
    };
    r.on(rive.EventType.Stop, () => {
      //r.reset();
      // set timeout to loop
      requestAnimationFrame(setLoopTimeout);
    });

    // check if device supports hover
    const query = window.matchMedia("(hover:hover)");
    if (query.matches) {
      // set animation to trigger on mousenter
      r.on(rive.EventType.Load, listenToMouseEnter);
    } else {
      setTimeout(playMailAnimation, 2000);
      loopAnimation = true;
    }
  });
</script>

<div id="card-contact" class="card">
  <div class="card__bg">
    <div class="model-container">
      <canvas bind:this={canvas} height="380" width="380"></canvas>
    </div>
  </div>
  <div class="card__body">
    <div class="card__tools">
      <h2>Mail me</h2>
      <div class="icon--round">
        <IconMail></IconMail>
      </div>
    </div>
  </div>
  <div class="card__actions">
    <p>Got a project?<br />Let's talk.</p>
  </div>
</div>

<style>
  #card-contact:hover {
    cursor: pointer;
  }
  #card-contact:hover h2 {
    text-decoration: underline;
  }
  p {
    line-height: 1;
  }
  .card__tools {
    display: flex;
    justify-content: space-between;
  }
  .icon--round {
    background-color: var(--c-btn-color, inherit);
    color: var(--c-btn-bg, inherit);
    --icon-size: 2rem;
    height: 3.25rem;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #card-contact .model-container {
    display: flex;
    justify-content: end;
    align-items: end;
  }
  #card-contact canvas {
    max-height: 330px;
    height: 100%;
    width: auto;
    aspect-ratio: 1/1;
    transform: translateX(10%);
  }
</style>
