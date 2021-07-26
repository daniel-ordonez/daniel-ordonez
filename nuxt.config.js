const routes = async () => {
  const { $content } = require("@nuxt/content");
  let files = await $content({ deep: true })
    .where({ published: true })
    .fetch();
  return files.map(file => {
    console.log(file.path);
    return file.path;
  });
};

const constructFeedItem = (post, hostname) => {
  const url = `${hostname}/${post.path}`;
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content: post.description
  };
};

const createFeed = async (feed, args) => {
  const [ext] = args;
  const hostname =
    process.NODE_ENV === "production"
      ? "https://daniel-ordonez.com"
      : "http://localhost:3000";
  feed.options = {
    title: "Daniel Ordoñez",
    description:
      "Yo! I'm Daniel, a developer and design enthusiast who likes making digital stuff and day dreams with a lot of stuff.",
    link: `${hostname}/feed.${ext}`
  };
  const { $content } = require("@nuxt/content");
  let files = await $content({ deep: true })
    .where({ published: true })
    .fetch();
  for (const post of files) {
    const feedItem = await constructFeedItem(post, hostname);
    feed.addItem(feedItem);
  }
  return feed;
};

export default {
  target: "static",
  generate: {
    fallback: true,
    routes
  },
  head: {
    title: "Daniel Ordoñez",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.png" },
      {
        hid: "hreflang-es",
        rel: "alternate",
        href: "https://daniel-ordonez.com/es/",
        hreflang: "es"
      },
      {
        hid: "hreflang-en",
        rel: "alternate",
        href: "https://daniel-ordonez.com/",
        hreflang: "en"
      }
    ]
  },
  css: ["~/assets/css/main.css"],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ["@nuxtjs/pwa", "@nuxt/content", "@nuxtjs/feed", "@nuxtjs/sitemap"],
  content: {},
  sitemap: {
    hostname: "https://daniel-ordonez.com",
    gzip: true,
    routes
  },
  feed: [
    {
      path: "/feed.xml",
      create: createFeed,
      cacheTime: 1000 * 60 * 15,
      type: "rss2",
      data: ["xml"]
    },
    {
      path: "/feed.json",
      create: createFeed,
      cacheTime: 1000 * 60 * 15,
      type: "rss2",
      data: ["json"]
    }
  ],
  hooks: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  icon: {
    fileName: "icon.png"
  },
  pwa: {
    manifest: {
      name: "Daniel Ordoñez",
      short_name: "d~o app",
      lang: "en",
      description:
        "Yo! I'm Daniel, a developer and design enthusiast who likes making digital stuff and day dreams with a lot of stuff."
    },
    meta: {
      name: "Daniel Ordoñez",
      author: "Daniel Ordoñez",
      description:
        "I'm Daniel, a developer and design enthusiast who likes making digital stuff and day dreams with a lot of stuff.",
      ogHost: "daniel-ordonez.com"
    }
  }
};
