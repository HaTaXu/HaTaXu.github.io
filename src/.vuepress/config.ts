import { defineUserConfig } from "vuepress";
import { MeiliSearchPlugin } from "vuepress-plugin-meilisearch2"
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "HanTx",
      description: "博客演示",
    },
    "/en/": {
      lang: "en-US",
      title: "HanTx",
      description: "A blog demo",
    },
  },

  theme,

  plugins: [
    MeiliSearchPlugin({
      host: "https://search.shaanstar.art/",
      apiKey: "d7378b222aaf0c0b270920125e5bf0dbc27aead34a782772f72ddab524bc6ed6",
      index: "blog",
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
