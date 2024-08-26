<script>
  import * as rive from "@rive-app/canvas-lite";
  import { onMount } from "svelte";
  import IconMail from "../icons/IconMail.svelte";
  import { supportsHover } from "../../store";
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
    dialog.showModal();
  };
  const closeDialog = () => {
    dialog.close();
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
    <p>Got projects?</p>
  </div>
</div>

<ModalDialog bind:this={dialog} title="Let's talk">
  <ContactForm on:submit={closeDialog}></ContactForm>
</ModalDialog>

<style>
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
