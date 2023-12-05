<script>
  const social = [
    { icon: "github", url: "https://github.com/daniel-ordonez" },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/daniel-adolfo-ordo%C3%B1ez-rubio/",
    },
    { icon: "behance", url: "https://www.behance.net/daniordonez/" },
  ];
</script>

<div id="contact-links" class="hidden" style="--icons: {social.length}">
  {#each social as link, i (i)}
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      class="scale-in"
      style="animation-delay: {1000 + 100 * i}ms;"
      aria-label="Go to my {link.icon} page"
    >
      <img src="social/{link.icon}.svg" alt="" srcset="" />
    </a>
  {/each}
</div>

<style>
  #contact-links {
    --icon-size: 24px;
    --padding: 4px;
    --gap: 8px;
    --border: calc((var(--padding) * 2) + var(--icon-size));
    --icons-n: 1;
    --icons: 1;
    background-color: rgba(var(--rgb-white), 0.8);
    backdrop-filter: blur(8px);
    padding: var(--padding) calc(var(--padding) * 2);
    border-radius: var(--border);
    display: flex;
    align-items: center;
    gap: var(--gap);
    min-height: var(--border);
    min-width: var(--border);
    animation: fade-in--social 400ms ease-in-out 600ms;
    animation-fill-mode: both;
    transition: all ease-in-out 400ms;
    will-change: width, max-width, opacity, transform;
  }
  #contact-links a,
  #contact-links img {
    height: var(--icon-size);
    width: var(--icon-size);
  }
  @keyframes fade-in--social {
    0% {
      opacity: 0;
      max-width: calc((var(--padding) * 4) + var(--icon-size));
    }
    30% {
      opacity: 1;
    }
    100% {
      max-width: calc(
        (var(--padding) * 4) + (var(--gap) * (var(--icons) - 1)) +
          (var(--icon-size) * var(--icons))
      );
    }
  }
</style>
