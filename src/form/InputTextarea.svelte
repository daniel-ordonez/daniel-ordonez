<script>
  import { onMount } from "svelte";

  export let id;
  export let name;
  export let required = true;
  export let requiredMessage;
  export let placeholder = "";
  export let label = "";
  export let minLength = 0;
  let input;
</script>

<label for="cf-message">
  <div class="input-wrapper">
    <div class="validity-message" data-for="message"></div>
    <textarea
      bind:this={input}
      {name}
      {id}
      cols="10"
      rows="3"
      {required}
      {placeholder}
      data-required-msg={requiredMessage}
      data-minlength={minLength}
    ></textarea>
  </div>
  <div class="input__label">{label}</div>
</label>
