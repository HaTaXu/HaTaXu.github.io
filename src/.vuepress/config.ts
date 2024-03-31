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
      host: "http://47.108.48.215:7700",
      apiKey: "fb7184124e3a7b10b0e96ad562debf95302a6b218bf32998fa1f33dcb50ee009",
      index: "blog",
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
