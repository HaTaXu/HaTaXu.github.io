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
          { text: "发布到docker", icon: "pen-to-square", link: "发布到github" },
          { text: "发布到github", icon: "pen-to-square", link: "发布到github" },
        ],
      },
      {
        text: "Linux",
        icon: "pen-to-square",
        prefix: "Linux/",
        children: [
          {
            text: "CentOS",
            icon: "pen-to-square",
            prefix: "CentOS/",
            children: [
              { text: "CentOS初始化", icon: "pen-to-square", link: "CentOS初始化" },
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
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
