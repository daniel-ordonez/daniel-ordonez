<template>
  <main class="main-grid gap--md pb--lg">
    <section class="flex flex--col align-items--center mt--lg">
      <h1 class="t--display mv--0">Stuff</h1>
      <h2 class="mv--0">I've made 😬</h2>
    </section>
    <section
      v-for="(group, groupIndex) in stuff"
      :key="`group--${groupIndex}--${group.name}`"
    >
      <h2>{{ group.name }}</h2>
      <div class="subgrid">
        <a
          v-for="(item, index) in group.items"
          :key="`item--${index}`"
          class="card md--4 sm--2 flex flex--col"
          :href="item.href"
          target="_blank"
        >
          <div class="card__media flex justify-content--center" v-if="item.src">
            <img :src="item.src" :alt="item.alt" :title="item.title" />
          </div>
          <div class="card__content mt--auto">
            <h3 class="mv--0">{{ item.name }}</h3>
          </div>
        </a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Stuff",
  data: () => ({
    stuff: [
      {
        name: "Icons",
        items: [
          {
            href: "https://www.iconfinder.com/iconsets/glyph-hand-gestures",
            src: "/images/icons1.png",
            alt: "iconfinder site screenshot",
            title: "iconfinder",
            name: "Gesture icons",
          },
          {
            href: "https://www.iconfinder.com/iconsets/ms-word-docs",
            src: "/images/icons2.png",
            alt: "iconfinder site screenshot",
            title: "iconfinder",
            name: "MSWord icons",
          },
          {
            href: "https://www.iconfinder.com/iconsets/glyph-hand-gestures",
            src: "/images/icons3.png",
            alt: "thenounproject site screenshot",
            title: "thenounproject",
            name: "Gaming icons",
          },
        ],
      },
      {
        name: "Infographics",
        items: [
          {
            href:
              "https://drive.google.com/file/d/18LS_-m7J18B_Oibm5yJBKGZVsktVzPt6/view",
            title: "Estilos de aprendizaje",
            name: "Estilos de aprendizaje",
            src: "/images/info3.png",
            alt: "PDF preview",
          },
          {
            href:
              "https://drive.google.com/file/d/1_B2m9h40mKZ8FVDT2ii-4NCMGXVkpFZa/view?usp=sharing",
            title: "Gestión del tiempo",
            name: "Gestión del tiempo",
            src: "/images/info2.png",
            alt: "PDF preview",
          },
          {
            href:
              "https://drive.google.com/file/d/1RUK8iq9n2IOw55IZ99tUBmcyav6lZY4-/view?usp=sharing",
            title: "Lavarse las manos",
            name: "Lavarse las manos",
            src: "/images/info1.png",
            alt: "PDF preview",
          },
        ],
      },
      {
        name: "Code 4 fun",
        items: [
          {
            href: "https://roaderful.itch.io/",
            src: "/images/itchio.png",
            alt: "Itch.io screenshot",
            title: "Itch.io",
            name: "Jam games on Itch.io",
          },
          {
            href: "https://kanto-dex.netlify.app/",
            src: "/images/kantodex.png",
            alt: "Kanto Dex screenshot",
            title: "Kanto Dex",
            name: "Kanto Dex PWA",
          },
        ],
      },
    ],
  }),
};
</script>

<style>
</style>