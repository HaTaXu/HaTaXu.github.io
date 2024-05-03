---
title: 配置Nginx
category: Ubuntu
tag:
  - nginx
  - Ubuntu
  - docker
---

# 配置 nginx
## 1. 拉取 nginx
```shell
docker pull nginx
```
## 2. nginx 镜像的测试运行
```shell
docker run --name nginx -p 80:80 -p 443:443 -d nginx
```
## 3. 复制容器内配置文件到容器外部挂载的配置文件路径
```shell
docker container cp nginx:/etc/nginx/nginx.conf /etc/nginx/conf
```
## 4. nginx 镜像的正式运行
```shell
docker run -d -p 80:80 -p 443:443 --name nginx \
-v /etc/nginx/html:/usr/share/nginx/html \
-v /etc/nginx/logs:/var/log/nginx  \
-v /etc/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /etc/nginx/cert:/etc/nginx/cert \
nginx
```
## 5. 修改配置文件中的 https 设置
加上：
```
upstream shaanstar {
    server 8.130.104.37:29475;
}

server {
    listen       443 ssl;
    server_name  www.shaanstar.art;

    ssl_certificate      cert/www.shaanstar.art.pem;
    ssl_certificate_key  cert/www.shaanstar.art.key;

    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;

    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers  on;

    location / {
        proxy_pass https://shaanstar;
    }
}
```
## 6. 重启 nginx 容器
```shell
docker restart nginx
```
## 7. 进入 nginx 容器内部
```shell
docker exec -it nginx /bin/bash
```
可以运行
```shell
nginx -V
```
以查看`nginx`的详细信息