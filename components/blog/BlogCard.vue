<template>
  <div class="card">
    <nuxt-link :to="`/${baseURL}blog/${article.slug}`" class="transparent">
      <div v-if="article.image" class="card__thumbnail">
        <figure class="flex justify-content--center align-items--center">
          <img :src="article.image" :alt="article.imageAlt" />
        </figure>
      </div>
      <div class="card__content">
        <h2 class="article__title t--h3 mv--0">{{ article.title }}</h2>
        <p class="article__excerpt">{{ article.description }}</p>
      </div>
      <div v-if="article.tags" class="flex ph--md pb--sm tags gap--sm">
        <a
          v-for="(tag, tagIndex) in article.tags"
          :key="`tag--${tagIndex}`"
          :href="`tags/${tag}`"
          :class="`tag--${getValueOfStr(tag)}`"
        >
          {{ tag }}
        </a>
      </div>
    </nuxt-link>
    <div v-show="false">
      <span
        v-for="(tag, tag_index) in article.tags"
        :key="`tag--${tag_index}`"
        >{{ tag }}</span
      >
    </div>
  </div>
</template>

<script>
import blogCards from "~/mixins/blogCards";
export default {
  name: "BlogCard",
  mixins: [blogCards],
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
    baseURL: {
      type: String,
      default: "",
    },
  },
  mounted() {
    const el = this.$el;
    const height = el.scrollHeight;
    const pixelsPerRow = 60;
    const rows = Math.ceil(height / pixelsPerRow);
    el.style.gridRowEnd = `span ${rows}`;
  },
};
</script>

