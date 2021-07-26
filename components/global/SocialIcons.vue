<template>
  <div class="flex justify-content--center gap--sm">
    <a
      v-for="(item, index) in list"
      :key="`item-${index}`"
      class="transparent"
      :href="item.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <component style="width: 24px" :is="`Icon${item.name}`"></component>
    </a>
  </div>
</template>

<script>
import IconTwitter from "~/components/global/icons/IconTwitter.vue";
import IconLinkedIn from "~/components/global/icons/IconLinkedIn.vue";
import IconInstagram from "~/components/global/icons/IconInstagram.vue";
export default {
  name: "SocialIcons",
  components: {
    IconTwitter,
    IconLinkedIn,
    IconInstagram
  },
  data: () => ({
    list: [
      /*
      {
        name: "Medium",
        icon: "medium",
        url: "https://medium.com/@daniel_ordonez"
      },*/
      {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/daniel-adolfo-ordo%C3%B1ez-rubio/"
      } /*
      {
        name: "Dev.to",
        icon: "dev-dot-to",
        url: "https://dev.to/danielordonez"
      },*/,
      {
        name: "Instagram",
        icon: "instagram",
        url: "https://www.instagram.com/daniel.a.ordonez.r/"
      },
      { name: "Twitter", icon: "twitter", url: "https://twitter.com/roaderful" }
      /*
      {name: 'RSS', icon: 'rss', url: 'https://daniel-ordonez.com/feed.xml'},
      */
    ]
  })
};
</script>
