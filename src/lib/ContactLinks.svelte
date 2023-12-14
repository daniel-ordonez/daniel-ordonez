<script>
  const social = [
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/daniel-adolfo-ordo%C3%B1ez-rubio/",
    },
    { icon: "github", url: "https://github.com/daniel-ordonez" },
    { icon: "behance", url: "https://www.behance.net/daniordonez/" },
  ];
</script>

<div
  id="contact-links"
  class="hidden text--dark"
  style="--icons: {social.length}"
>
  <a
    href={social[0].url}
    target="_blank"
    rel="noopener noreferrer"
    class="scale-in"
    style="animation-delay: {1000 + 100 * 0}ms;"
    aria-label="Go to my {social[0].url} page"
  >
    <svg viewBox="0 0 48 48"
      ><path
        d="M36.5,6h-25C8.468,6,6,8.468,6,11.5v25c0,3.032,2.468,5.5,5.5,5.5h25c3.032,0,5.5-2.468,5.5-5.5v-25	C42,8.468,39.532,6,36.5,6z M18,34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1V34z M15.5,18c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C18,16.881,16.881,18,15.5,18z M35,34	c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1v-7.5c0-1.379-1.121-2.5-2.5-2.5S25,25.121,25,26.5V34c0,0.553-0.447,1-1,1h-3	c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v0.541C26.063,20.586,27.462,20,29,20c3.309,0,6,2.691,6,6V34z"
      /></svg
    >
  </a>
  <a
    href={social[1].url}
    target="_blank"
    rel="noopener noreferrer"
    class="scale-in"
    style="animation-delay: {1000 + 100 * 1}ms;"
    aria-label="Go to my {social[1].url} page"
  >
    <svg viewBox="0 0 48 48"
      ><path
        d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"
      /></svg
    >
  </a>
  <a
    href={social[2].url}
    target="_blank"
    rel="noopener noreferrer"
    class="scale-in"
    style="animation-delay: {1000 + 100 * 2}ms;"
    aria-label="Go to my {social[2].url} page"
  >
    <svg viewBox="0 0 48 48"
      ><path
        d="M20 23c1 0 4-1.618 4-5.618C24 11.163 18.494 10 12.292 10 11.12 10 7.547 10.002 5 10.001c-1.657-.001-3 1.343-3 3V35c0 1.657 1.343 3 3 3l11.8 0c4.419 0 8.165-3.496 8.2-7.915C25.047 24.009 20 23 20 23zM8 15h7c1.657 0 3 1.343 3 3s-1.343 3-3 3H8V15zM15.5 33H8v-7h7.5c1.933 0 3.5 1.567 3.5 3.5S17.433 33 15.5 33zM45.51 29c.829 0 1.5-.671 1.501-1.5v0c0-5.799-4.011-10.5-10-10.5-5.523 0-10 4.701-10 10.5 0 5.799 4.477 10.5 10 10.5 4.887 0 7.602-2.286 8.928-5.643.256-.647-.246-1.348-.942-1.348h-2.401c-.365 0-.688.207-.877.52C40.805 33.039 39.41 34 37.532 34c-2.812 0-4.86-2.135-5.382-5h10.722H45.51zM37.011 21c2.077 0 4.09 1.656 4.658 4h-9.273C33.149 22.651 34.931 21 37.011 21zM41.5 15h-8c-.828 0-1.5-.672-1.5-1.5v0c0-.828.672-1.5 1.5-1.5h8c.828 0 1.5.672 1.5 1.5v0C43 14.328 42.328 15 41.5 15z"
      /></svg
    >
  </a>
</div>

<style>
  #contact-links {
    --size: var(--icon-size, 32px);
    --icons-n: 1;
    --icons: 1;
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
  #contact-links svg {
    height: var(--size);
    width: var(--size);
  }
  @keyframes fade-in--social {
    0% {
      opacity: 0;
      max-width: calc((var(--padding) * 4) + var(--size));
    }
    30% {
      opacity: 1;
    }
    100% {
      max-width: calc(
        (var(--padding) * 4) + (var(--gap) * (var(--icons) - 1)) +
          (var(--size) * var(--icons))
      );
    }
  }
</style>
