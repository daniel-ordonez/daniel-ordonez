<script>
  import ThemeBtn from "./ThemeBtn.svelte";
</script>

<header>
  <div class="header-wrapper">
    <div style="appearance: none; color: inherit; text-decoration: none;">
      daniordonez
    </div>
    <div>•</div>
    <div>© 2024</div>
    <div>•</div>
    <div>
      <ThemeBtn></ThemeBtn>
    </div>
  </div>
</header>

<style>
  .header-wrapper {
    max-width: min(1280px, calc(100% - 3rem));
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    font-size: 1.25rem;
    --ani-delay: 600ms;
    --ani-duration: 600ms;
  }

  .header-wrapper > div:nth-child(1),
  .header-wrapper > div:nth-child(4) {
    animation: slide-l var(--ani-duration) ease-in-out both;
    animation-delay: var(--ani-delay);
  }
  .header-wrapper > div:nth-child(3) {
    animation: slide-t var(--ani-duration) ease-in-out both;
    animation-delay: var(--ani-delay);
  }
  .header-wrapper > div:nth-child(5),
  .header-wrapper > div:nth-child(2) {
    animation: slide-r var(--ani-duration) ease-in-out both;
    animation-delay: var(--ani-delay);
  }
</style>
