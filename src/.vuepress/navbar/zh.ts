import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "专业知识",
    icon: "pen-to-square",
    prefix: "/academic/",
    children: [
      {
        text: "深度学习",
        icon: "pen-to-square",
        prefix: "DeepLearning/",
        children: [
          { text: "环境配置", icon: "pen-to-square", link: "环境配置" },
          { text: "简单 CNN 模型", icon: "pen-to-square", link: "简单CNN模型" },
        ],
      },
    ],
  },
  {
    text: "技术",
    icon: "pen-to-square",
    prefix: "/tech/",
    children: [
      {
        text: "AList",
        icon: "pen-to-square",
        prefix: "AList/",
        children: [
          { text: "发布 docker 版本", icon: "pen-to-square", link: "发布docker版本" },
          { text: "发布 GitHub 版本", icon: "pen-to-square", link: "发布GitHub版本" },
        ],
      },
      {
        text: "CentOS",
        icon: "pen-to-square",
        prefix: "CentOS/",
        children: [
          { text: "CentOS 初始化", icon: "pen-to-square", link: "CentOS初始化" },
        ],
      },
      {
        text: "GitHub Actions",
        icon: "pen-to-square",
        prefix: "GitHub_Actions/",
        children: [
          { text: "自动爬虫", icon: "pen-to-square", link: "自动爬虫" },
        ],
      },
      {
        text: "SpringBoot",
        icon: "pen-to-square",
        prefix: "SpringBoot/",
        children: [
          { text: "环境配置", icon: "pen-to-square", link: "环境配置" },
          { text: "controller 层", icon: "pen-to-square", link: "controller层" },
        ],
      },
      {
        text: "Ubuntu",
        icon: "pen-to-square",
        prefix: "Ubuntu/",
        children: [
          { text: "Ubuntu 初始化", icon: "pen-to-square", link: "Ubuntu初始化" },
          { text: "配置 AList", icon: "pen-to-square", link: "配置AList" },
          { text: "配置 MeiliSearch", icon: "pen-to-square", link: "配置MeiliSearch" },
          { text: "配置 nginx", icon: "pen-to-square", link: "配置nginx" },
        ],
      },
    ],
  },
]);
