<template>
  <div class="grid--showcase">

  </div>
</template>

<script>
export default {

}
</script>

<style>
.post--mini {
  grid-column: 1/-1;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.16), 0 4px 16px 6px rgba(0, 0, 0, 0.02);
  padding: 1rem;
}
@media screen and (min-width: 1672px){
  .grid--showcase {
    grid-template-columns: repeat(12, 122px);
    gap: 1rem;
  }
  .grid--showcase>div:nth-child(1) {
    grid-column: 1/9;
    grid-row: 1 / span 2;
  }
  .grid--showcase>div:nth-child(2),
  .grid--showcase>div:nth-child(3) {
    grid-column: 1 / span 4;
    grid-row: 3 / span 2;
  }
  .grid--showcase>div:nth-child(3) {
    grid-column-start: 5;
  }
  .grid--showcase>div:nth-child(4),
  .grid--showcase>div:nth-child(5),
  .grid--showcase>div:nth-child(6),
  .grid--showcase>div:nth-child(7) {
    grid-column: 9/-1;
  }
}
</style>
