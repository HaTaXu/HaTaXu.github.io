import { defineUserConfig } from "vuepress";
import {docsearchPlugin} from "@vuepress/plugin-docsearch"
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "HanTx",
      description: "vuepress-theme-hope 的博客演示",
    },
    "/en/": {
      lang: "en-US",
      title: "HanTx",
      description: "A blog demo for vuepress-theme-hope",
    },
  },

  theme,

  plugins: [
    docsearchPlugin({
      appId: "7WMHCEW1R2",
      apiKey: "e6d946dc7bae2d580db01a10742752da",
      indexName: "hataxuio",
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
        '/en/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
      },
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
