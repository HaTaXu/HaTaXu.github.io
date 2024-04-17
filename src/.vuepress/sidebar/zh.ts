import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      children: [
        "disable",
        "encrypt",
        "layout",
        "markdown",
        "page"
      ],
    },
    {
      text: "专业知识",
      icon: "book",
      prefix: "academic/",
      children: [
        "DeepLearning/"
      ],
    },
    {
      text: "技术",
      icon: "book",
      prefix: "tech/",
      children: [
        "AList/",
        "CentOS/",
        "GitHub_Actions/",
        "SpringBoot/",
        "Ubuntu/"
      ],
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
  "demo/": "structure",
  "academic/": "structure",
  "tech/": "structure",
});
