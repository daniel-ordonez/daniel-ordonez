<script>
  // @ts-nocheck

  import InputTextarea from "../../../form/InputTextarea.svelte";
  import InputText from "../../../form/InputText.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  import { FormManager } from "../../../utils.mjs";
  import SubmitBtn from "../../../form/SubmitBtn.svelte";

  let form;
  let unlockStatus = "";
  let updateIcon;
  let isValid = false;
  const dispatch = createEventDispatcher();

  const onValidityUpdate = (detail) => {
    const { valid } = detail;
    isValid = valid;
    if (!valid) {
      const { inputs, validInputs } = detail;
      unlockStatus = `Fill all fields to submit: ${validInputs}/${inputs}`;
    } else {
      unlockStatus = "";
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    const formData = new FormData(e.target);
    const request = fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        dispatch("submit");
      })
      .catch((error) => alert(error));
  };
  onMount(() => {
    const mng = new FormManager(form, onValidityUpdate);
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        updateIcon();
      }
    });
    observer.observe(form);
  });
</script>

<form
  bind:this={form}
  action="/"
  method="POST"
  on:submit={onSubmit}
  data-netlify="true"
  name="contact"
>
  <InputText
    id="cf-name"
    name="name"
    label="Name"
    required
    requiredMessage="You have a name, right?"
    placeholder="I am..."
    autofocus
  ></InputText>
  <InputTextarea
    id="cf-message"
    name="message"
    label="Message"
    required
    requiredMessage="Say something (at leas 20 characters long)"
    placeholder="I got this cool idea..."
    minLength={20}
  ></InputTextarea>
  <InputText
    id="cf-mail"
    name="email"
    label="Email"
    type="email"
    required
    requiredMessage="Email required to reply."
    placeholder="my@mail.com"
  ></InputText>
  <div class="btn--send-wrapper">
    <small>{unlockStatus}</small>
    <SubmitBtn bind:updateIcon disabled={!isValid}></SubmitBtn>
  </div>
  <input type="hidden" name="form-name" value="contact" />
</form>
