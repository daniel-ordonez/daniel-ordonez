<script>
  export let title = "";
  let dialog;

  export const showModal = () => {
    document.body.classList.add("noscroll");
    dialog.showModal();
  };
  export const close = () => {
    document.body.classList.remove("noscroll");
    dialog.close();
  };
  const onClose = () => {};
</script>

<dialog bind:this={dialog} class="modal" on:close={onClose}>
  <div class="dialog__content">
    <div class="content-wrapper">
      <div class="card">
        <div class="card__tools">
          <h3>
            {title}
          </h3>
          <button class="btn--close" on:click={close}>
            <div class="icon--round">
              <svg viewBox="0 0 24 24" class="icon icon--stroke">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </button>
        </div>
        <div class="card__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</dialog>

<style>
  .dialog__content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
  .content-wrapper {
    padding: var(--px, 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
  .content-wrapper > .card {
    will-change: opacity, transform;
    animation: slide-in 600ms cubic-bezier(0.33, 1, 0.68, 1) both;
    animation-delay: 100ms;
  }
</style>
