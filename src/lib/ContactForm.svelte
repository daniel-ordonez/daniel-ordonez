<script>
  // @ts-nocheck

  import { createEventDispatcher } from "svelte";
  import BtnClose from "./BtnClose.svelte";
  import { validateFormInputs, animations, clearForm } from "../formUtils.mjs";
  const dispatch = createEventDispatcher();

  let form;
  const validateForm = async (form) => {
    const invalidInputs = validateFormInputs(form);
    await new Promise((resolve) => {
      requestAnimationFrame(resolve);
    });

    form.setAttribute("validated", true);

    if (invalidInputs.length) {
      const input = invalidInputs[0];
      input.focus();
      input.animate(animations.shake, 600);
      input.reportValidity();
    }
    return form.checkValidity();
  };
  const onFormSubmitted = () => {
    console.log("Form successfully submitted");
    clearForm(form);
    dispatch("close");
  };
  const onSend = async () => {
    const ok = await validateForm(form);
    if (ok) {
      const formData = new FormData(form);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(onFormSubmitted)
        .catch((error) => alert(error));
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  const onClose = () => {
    dispatch("close");
  };
</script>

<div id="contact-form">
  <div class="form__header">
    <h2>Get in <br />contact!</h2>
    <BtnClose on:close={onClose}></BtnClose>
  </div>
  <form
    bind:this={form}
    class="form__body"
    name="contact"
    data-netlify="true"
    nelifty
    on:submit={onFormSubmit}
    method="POST"
  >
    <label for="cf-name">
      <input
        autocomplete="off"
        id="cf-name"
        name="name"
        autofocus
        required
        placeholder="I am..."
        type="text"
      />
      <div>Your name</div>
    </label>
    <label for="cf-email">
      <input
        autocomplete="off"
        type="email"
        name="email"
        id="cf-email"
        required
        placeholder="favorite@email.com"
      />
      <div>Email</div>
    </label>
    <label for="cf-message">
      <textarea
        name="message"
        id="cf-message"
        cols="10"
        rows="3"
        required
        placeholder="Say hi 👋"
      ></textarea>
      <div>Message</div>
    </label>
  </form>
  <div class="form__actions">
    <button class="btn-send" type="submit" on:click={onSend}>Send</button>
  </div>
</div>

<style>
  #contact-form {
    --bg-form: hsl(163, 100%, 15%);
    background-color: var(--bg-form);
    border-radius: 24px;
    padding: 1.5em;
    max-width: calc(100vw - 20px);
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    color: white;
  }
  h2 {
    font-size: 40px;
    font-family: Afacad;
    font-weight: 600;
    text-align: left;
    text-transform: uppercase;
    line-height: 1;
    flex-grow: 1;
  }
  .form__header {
    display: flex;
  }
  .form__body {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
  }
  input,
  textarea {
    min-height: 3.5rem;
    font-size: 1.5rem;
  }

  .form__actions {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }
  .btn-send {
    padding: 10px;
    height: 3em;
    border-radius: calc((3em + 10px) / 2);
    background-color: transparent;
    border-width: 2px;
    border-color: hsl(var(--hsl-form));
    border-style: solid;
    font-size: 1rem;
    color: hsl(var(--hsl-form));
    cursor: pointer;
    user-select: none;
    transition: all 200ms ease-in-out;
    text-transform: uppercase;
    font-weight: 600;
  }
  button.btn-send:hover,
  button.btn-send:active,
  button.btn-send:focus {
    background-color: hsl(var(--hsl-form-focus));
    color: var(--bg-form);
    box-shadow:
      hsla(var(--hsl-form), 0.2) 0px 5px,
      hsla(var(--hsl-form), 0.1) 0px 10px,
      hsla(var(--hsl-form), 0.05) 0px 15px;
  }
</style>
