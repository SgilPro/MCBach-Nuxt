// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "MC Bach - 音樂社群平台",
      meta: [
        { charset: "utf-8" },
        { name: "author", content: "MC Bach Team" },
        {
          name: "description",
          content: "MC Bach 是一個讓音樂愛好者分享、發現和討論音樂的社群平台。",
        },
        { name: "keywords", content: "音樂,社群,分享,討論,評論" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "og:description",
          content: "MC Bach 是一個讓音樂愛好者分享、發現和討論音樂的社群平台。",
        },
        { property: "og:image", content: "/images/og-image.jpg" },
        { property: "og:title", content: "MC Bach - 音樂社群平台" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://mcbach.com" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "favicon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  compatibilityDate: "2024-11-01",
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/css/main.css",
  ],
  devServer: {
    port: 1685,
  },
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Inter: [400, 600, 700],
      "Noto+Sans+TC": [400, 700],
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/google-fonts"],
  plugins: ["~/plugins/vue-query.ts"],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
