<script>
  // @ts-nocheck

  import * as rive from "@rive-app/canvas-lite";
  import { onMount } from "svelte";
  import IconMail from "../icons/IconMail.svelte";
  import { supportsHover, theme } from "../../store";
  import ModalDialog from "../ModalDialog.svelte";
  import ContactForm from "./card-contact/ContactForm.svelte";

  let dialog;
  let card;
  let canvas;

  const startRiveAnimation = () => {
    const r = new rive.Rive({
      src: "animations/mailbox.riv",
      canvas,
      autoplay: false,
      layout: new rive.Layout({ fit: rive.Fit.Cover }),
      stateMachines: "SM1",
      animations: "mail_in",
    });
    let replayTimeout = null;
    let loopAnimation = false;

    const clearReplayTimeout = () => {
      if (replayTimeout) {
        clearTimeout(replayTimeout);
        replayTimeout = null;
      }
    };
    const playMailAnimation = () => {
      clearReplayTimeout();
      r.play("mail_in");
    };
    const setReplayTimeout = (t = 2000) => {
      if (loopAnimation) {
        replayTimeout = setTimeout(() => {
          playMailAnimation();
        }, t);
      }
    };

    const triggerAnimationOnHover = () => {
      canvas.addEventListener("mouseenter", () => {
        loopAnimation = true;
        // check animation is not playing
        if (!r.isPlaying) {
          playMailAnimation();
        }
      });
    };

    const setAnimationLoop = () => {
      loopAnimation = true;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting }) => {
            if (isIntersecting) {
              loopAnimation = true;
              clearReplayTimeout();
              playMailAnimation();
            } else {
              clearReplayTimeout();
              if (r.isPlaying) {
                loopAnimation = false;
                r.stop();
              }
            }
          });
        },
        { threshold: [0.5] }
      );
      observer.observe(card);
    };

    // If loopAnimation true set timeout to replay after stops
    r.on(rive.EventType.Stop, () => {
      requestAnimationFrame(setReplayTimeout);
    });

    r.on(rive.EventType.Load, () => {
      if ($supportsHover) {
        triggerAnimationOnHover();
        setTimeout(() => {
          if (!r.isPlaying) {
            playMailAnimation();
          }
        }, 1000);
      } else {
        // loop animation while visible
        setAnimationLoop();
      }
    });

    return r;
  };
  const onCardClick = (e) => {
    e.preventDefault();
    const card = document.getElementById("thnx-card");
    card.classList.add("hidden");
    dialog.showModal();
  };
  const onFormSubmit = async () => {
    const hideForm = dialog.exitAnimation();
    const card = document.getElementById("thnx-card");
    // Animate thanx card in
    card.classList.remove("hidden");
    card.animate(
      {
        opacity: [0, 1],
        transform: ["scale(0)", "scale(1)"],
      },
      {
        duration: 600,
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }
    );
    const canvas = document.getElementById("thnx-canvas");
    // Show mailbox animation
    await hideForm.finished;
    const animationName = "mail_in"; //$theme == "dark" ? "mail_in_dark" : "mail_in";
    const r = new rive.Rive({
      src: "animations/mailbox.riv",
      canvas,
      autoplay: false,
      layout: new rive.Layout({ fit: rive.Fit.Contain }),
      stateMachines: "SM1",
      animations: animationName,
    });
    r.on(rive.EventType.Load, () => {
      r.resizeDrawingSurfaceToCanvas();
      r.play(animationName);
    });
    const onRiveStop = async () => {
      await card.animate(
        {
          opacity: [1, 0],
        },
        {
          duration: 300,
          easing: "cubic-bezier(0.33, 1, 0.68, 1)",
        }
      ).finished;
      r.off(rive.EventType.Stop, onRiveStop);
      r.cleanup();
      hideForm.cancel();
      dialog.close();
    };
    r.on(rive.EventType.Stop, onRiveStop);
  };
  onMount(() => {
    const onAnimationEnd = () => {
      card.removeEventListener("animationend", onAnimationEnd);
      card.addEventListener("click", onCardClick);
    };
    const onAnimationStart = () => {
      card.removeEventListener("animationstart", onAnimationStart);
      card.addEventListener("animationend", onAnimationEnd);
      startRiveAnimation();
    };
    card.addEventListener("animationstart", onAnimationStart);
  });
</script>

<div id="card-contact" class="card" bind:this={card}>
  <div class="card__bg">
    <div class="model-container">
      <canvas bind:this={canvas} height="380" width="380"></canvas>
    </div>
  </div>
  <div class="card__tools">
    <h2>Mail me</h2>
    <div class="icon--round">
      <IconMail></IconMail>
    </div>
  </div>
  <div class="card__actions">
    <p>Got <br />projects?</p>
  </div>
</div>

<ModalDialog bind:this={dialog} title="Let's talk">
  <ContactForm on:submit={onFormSubmit}></ContactForm>
  <div id="thnx-card" class="card" slot="cover">
    <div class="card__cover">
      <div class="model-container">
        <canvas id="thnx-canvas"></canvas>
        <div class="card__body">
          <h3>Thank you!</h3>
        </div>
      </div>
    </div>
  </div>
</ModalDialog>

<style>
  #thnx-card {
    position: absolute;
    aspect-ratio: 1/1;
    height: auto;
    width: min(300px, calc(100vw - var(--px, 2rem)));
  }
  #thnx-card .card__body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: var(--c-card-color, var(--c-card-default-color));
  }
  .card__cover {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--c-card-bg, var(--c-card-default-bg));
    z-index: 1;
    display: flex;
    align-items: end;
    justify-content: center;
  }
  .card__cover .model-container {
    aspect-ratio: 1/1;
    width: 100%;
    height: 100%;
  }
  :global(:root[theme="dark"] #thnx-card) {
    --c-card-bg: #d3d3d3;
    --c-card-color: #222222;
  }

  #card-contact {
    --c-card-bg: #d3d3d3;
    --c-card-color: #222222;
    will-change: transform;
  }
  :global(#card-contact.animate) {
    animation: grow 0.9s ease-in-out both;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    animation-delay: 150ms;
    transform-origin: top left;
  }
  #card-contact:hover {
    cursor: pointer;
  }
  #card-contact:hover h2 {
    text-decoration: underline;
  }
  p {
    line-height: 1;
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
    transform: translateX(8%);
  }
  @media (max-width: 480px) {
    #card-contact canvas {
      max-height: 330px;
      height: 115%;
      width: auto;
      aspect-ratio: 1/1;
      transform: translateX(15%);
    }
  }
</style>
