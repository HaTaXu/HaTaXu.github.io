---
title: 发布到 docker
category: AList部署
tag:
  - docker
  - AList
  - Github Actions
---

# 发布 docker 版本
发布 `docker` 版本只涉及后端自动化过程。

## 后端部分
### release docker
手动创建一个 `tag` 并发布一个版本时，会自动在 `docker` 上 `push` 各种 `linux` 版本