---
title: 发布 github 版本
category: AList部署
tag:
  - Github
  - AList
  - Github Actions
---
前后端均有涉及，更新时先按步骤更新前端代码并发布正确版本，之后才能保证更新后端时正确使用了同一版本，最后在发布后端版本时才可以保证正确更新了docker版本。

## 前端部分
修改代码后提交到`github`中，会自动触发`github workflows`中的`build`工作流和`format`工作流。
### build
自动在`ubuntu`环境中将前端代码构建成`dist`文件夹并提交到`https://github.com/HaTaXu/MyAList-Web-dist.git`仓库。
### format
自动运行`pnpm run format`来检查代码
### release
在手动创建一个`tag`并发布一个版本时才会自动触发`release`工作流，将前端代码打包成`tar.gz`和`zip`压缩包，以便在将来自动发布软件版本的时候直接下载使用。

## 后端部分
### release
手动创建一个`tag`并发布一个版本时，在`github`上发布各种`linux`版本