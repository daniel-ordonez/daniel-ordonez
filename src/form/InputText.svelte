<script>
  export let id;
  export let name;
  export let autofocus = false;
  export let required = true;
  export let requiredMessage;
  export let autocomplete = "off";
  export let placeholder = "";
  export let type = "text";
  export let label = "";
  let input;
</script>

<label for="cf-name">
  <div class="input-wrapper">
    <div class="validity-message" data-for={name}></div>
    <!-- svelte-ignore a11y-autofocus -->
    <input
      bind:this={input}
      {id}
      {name}
      {autocomplete}
      {required}
      {placeholder}
      {type}
      {autofocus}
      data-required-msg={requiredMessage}
    />
  </div>
  <div class="input__label">{label}</div>
</label>
