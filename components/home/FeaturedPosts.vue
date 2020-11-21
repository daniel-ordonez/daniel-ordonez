<template>
  <section class="flex flex--col mb--lg">
    <nuxt-link :to="`/${baseURL}blog/`" class="transparent col--all mr--auto">
      <h2>Blog</h2>
    </nuxt-link>
    <div class="subgrid row-gap--sm">
      <template v-for="(article, index) in posts">
        <div
          class="card flex flex--col col-gap--sm md--4"
          :key="`post--${index}`"
        >
          <a class="transparent" :href="`/blog/${article.slug}`">
            <div class="card__content pb--0">
              <div c class="mb--sm">
                <strong>{{ article.title }}</strong>
              </div>
              <div>{{ article.description }}</div>
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
          </a>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import langURL from "~/mixins/langURL";
import blogCards from "~/mixins/blogCards";
export default {
  name: "FeaturedPosts",
  mixins: [langURL, blogCards],
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
