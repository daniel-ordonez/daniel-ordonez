export default {
  head: {
    link: [
      { rel: 'canonical', hid: 'canonical', href: 'https://daniel-ordonez.com/' }
    ]
  },
  async asyncData({ $content, route, params, error }) {
    const path = route.path.split("/");
    const lang = path.length > 1 && path[1].length === 2 ? path[1] : false;
    const baseURL = lang ? `${lang}/` : "";
    const posts = await $content(`${baseURL}blog`)
      .where({ published: true, featured: true })
      .limit(10)
      .sortBy("date", "desc")
      .fetch();
    return { posts };
  },
}
