---
title: Ubuntu 初始化
category: Ubuntu
tag:
  - apt
  - Ubuntu
  - Docker
---

# 与 CentOS 的区别
>1. 常见的安装包格式deb包、安装rpm包的命令：deb-参数
>2. 包管理工具apt-get
>3. 支持tar包

# 下载配置 docker
## 1. Set up Docker's apt repository.
```sh
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
## 2. Install the Docker packages.
```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
### 遇到问题：
>E: Could not get lock /var/lib/dpkg/lock. It is held by process 25816 (unattended-upgr)\
N: Be aware that removing the lock file is not a solution and may break your system.\
E: Unable to lock the administration directory (/var/lib/dpkg/), is another process using it?
### 解决方法：
```sh
# '-9'是信息编号，表示杀死一个进程
kill -9 25816
```
执行该命令后重新运行 `install the Docker packages` 的命令后成功下载docker。\
之后运行 `docker info` 查看docker基本信息。
# 常用 docker 命令
## 1. 用 docker 拉取 AList 镜像
```sh
docker pull [image]
```
## 2. 查看已拉取的镜像
```sh
docker images
```
## 3. 运行镜像，生成容器（举个栗子）
```sh
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
```sh
docker rmi -f [image]
```
### 删除容器
```sh
docker rm -f [container]
```
### 重新运行容器
```sh
docker restart [container]
```
### 查看运行中的容器以及其运行状态
```sh
docker ps
```
### 设置管理员密码
```sh
docker exec -it [container] [path] [instruct]
```