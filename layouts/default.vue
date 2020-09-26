<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
.layout--mono {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 480px;
  justify-content: center;
}

.t--display {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
}
.t--headline {
  font-size: 2rem;
  font-weight: 500;
}

@media screen and (max-width: 512px){
  .layout--mono {
    grid-template-columns: calc(100vw - 2rem);
  }
}
@media screen and (max-width: 704px){
  .t--display {
    font-size: 3rem;
  }
  .t--headline {
    font-size: 1.5rem;
    line-height: 1.6;
  }
}
</style>
