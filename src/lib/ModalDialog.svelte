<script>
  export let title = "";
  let dialog;

  export const showModal = () => {
    dialog.showModal();
  };
  export const close = () => {
    dialog.close();
  };
  const onClose = () => {};
</script>

<dialog bind:this={dialog} class="modal" on:close={onClose}>
  <div class="dialog__content">
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
</dialog>

<style>
</style>
