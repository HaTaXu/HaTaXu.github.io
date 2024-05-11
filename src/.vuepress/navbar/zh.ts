import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "专业知识",
    icon: "fa-solid fa-graduation-cap",
    prefix: "/academic/",
    children: [
      {
        text: "深度学习",
        icon: "fa-solid fa-robot",
        prefix: "DeepLearning/",
        children: [
          { text: "基本概念", icon: "pen-to-square", link: "基本概念" },
          { text: "环境配置", icon: "pen-to-square", link: "环境配置" },
          { text: "简单 CNN 模型", icon: "pen-to-square", link: "简单CNN模型" },
          { text: "VGG 模型", icon: "pen-to-square", link: "VGG模型" },
          { text: "ViT 模型", icon: "pen-to-square", link: "ViT模型" },
        ],
      },
    ],
  },
  {
    text: "技术",
    icon: "fa-solid fa-code",
    prefix: "/tech/",
    children: [
      {
        text: "AList",
        icon: "fa-solid fa-list-ul",
        prefix: "AList/",
        children: [
          { text: "发布 docker 版本", icon: "pen-to-square", link: "发布docker版本" },
          { text: "发布 GitHub 版本", icon: "pen-to-square", link: "发布GitHub版本" },
        ],
      },
      {
        text: "CentOS",
        icon: "fa-brands fa-centos",
        prefix: "CentOS/",
        children: [
          { text: "CentOS 初始化", icon: "pen-to-square", link: "CentOS初始化" },
        ],
      },
      {
        text: "Database",
        icon: "fa-solid fa-database",
        prefix: "Database/",
        children: [
          { text: "SQL 语法", icon: "pen-to-square", link: "SQL语法" },
        ],
      },
      {
        text: "设计模式",
        icon: "fa-solid fa-lightbulb",
        prefix: "DesignPattern/",
        children: [
          { text: "单例模式", icon: "pen-to-square", link: "单例模式" },
        ],
      },
      {
        text: "GitHub Actions",
        icon: "fa-brands fa-github",
        prefix: "GitHub_Actions/",
        children: [
          { text: "基本概念", icon: "pen-to-square", link: "基本概念" },
          { text: "自动爬虫", icon: "pen-to-square", link: "自动爬虫" },
        ],
      },
      {
        text: "JAVA开发",
        icon: "fa-brands fa-java",
        prefix: "JAVA/",
        children: [
          { text: "单例模式", icon: "pen-to-square", link: "单例模式" },
        ],
      },
      {
        text: "SpringBoot",
        icon: "fa-brands fa-java",
        prefix: "SpringBoot/",
        children: [
          { text: "基本概念", icon: "pen-to-square", link: "基本概念" },
          { text: "controller 层", icon: "pen-to-square", link: "controller层" },
          { text: "hibernate", icon: "pen-to-square", link: "hibernate" },
        ],
      },
      {
        text: "Ubuntu",
        icon: "fa-brands fa-ubuntu",
        prefix: "Ubuntu/",
        children: [
          { text: "Ubuntu 初始化", icon: "pen-to-square", link: "Ubuntu初始化" },
          { text: "配置 AList", icon: "pen-to-square", link: "配置AList" },
          { text: "配置 MeiliSearch", icon: "pen-to-square", link: "配置MeiliSearch" },
          { text: "配置 Nginx", icon: "pen-to-square", link: "配置Nginx" },
        ],
      },
    ],
  },
]);
