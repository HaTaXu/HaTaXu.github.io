import { defineUserConfig } from "vuepress";
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

  // Enable it with pwa
  // shouldPrefetch: false,
});
