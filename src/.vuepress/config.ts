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
      appId: "MDSIF1J6BB",
      apiKey: "569ec71e1c83402b0a949373f130bcf2",
      indexName: "hataxu.github.io",
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
