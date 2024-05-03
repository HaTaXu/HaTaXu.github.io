---
title: 配置AList
category: Ubuntu
tag:
  - docker
  - AList
  - Ubuntu
---

# 配置 AList
## 1. 用 docker 拉取 AList 镜像
```shell
docker pull hantx/alist:latest
```
## 2. 查看已拉取的镜像
```shell
docker images
```
## 3. 运行镜像，生成容器
```shell
# -i: 以交互模式运行容器
# -t: 为容器重新分配一个伪输入终端
# --name: 为容器指定一个名称
# -p: 指定端口映射，格式为：主机(宿主)端口:容器端口
# --volume, -v: 绑定一个卷
# -e: 设置环境变量
# -d: 后台运行容器，并返回容器ID
docker run -d --name alist --restart=unless-stopped \
  -v /etc/alist:/opt/alist/data \
  -p 29475:29475 \
  -e PUID=0 -e PGID=0 -e UMASK=022 \
  hantx/alist:latest
```
### 删除镜像
```shell
docker rmi -f hantx/alist:latest
```
### 删除容器
```shell
docker rm -f alist
```
### 重新运行容器
```shell
docker restart alist
```
### 查看运行中的容器以及其运行状态
```shell
docker ps
```
### 设置管理员密码
```shell
docker exec -it alist ./alist admin set NEW_PASSWORD
```