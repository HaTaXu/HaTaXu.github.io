import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "博客",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "AList",
        icon: "pen-to-square",
        prefix: "AList/",
        children: [
          { text: "发布docker版本", icon: "pen-to-square", link: "发布docker版本" },
          { text: "发布GitHub版本", icon: "pen-to-square", link: "发布GitHub版本" },
        ],
      },
      {
        text: "CentOS",
        icon: "pen-to-square",
        prefix: "CentOS/",
        children: [
          { text: "CentOS初始化", icon: "pen-to-square", link: "CentOS初始化" },
        ],
      },
      {
        text: "GitHub Actions",
        icon: "pen-to-square",
        prefix: "GitHub Actions/",
        children: [
          { text: "自动爬虫", icon: "pen-to-square", link: "自动爬虫" },
        ],
      },
      {
        text: "Ubuntu",
        icon: "pen-to-square",
        prefix: "Ubuntu/",
        children: [
          { text: "Ubuntu初始化", icon: "pen-to-square", link: "Ubuntu初始化" },
          { text: "配置AList", icon: "pen-to-square", link: "配置AList" },
          { text: "配置MeiliSearch", icon: "pen-to-square", link: "配置MeiliSearch" },
          { text: "配置nginx", icon: "pen-to-square", link: "配置nginx" },
        ],
      },
    ],
  },
]);
