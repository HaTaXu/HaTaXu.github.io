---
title: controller 层
category: SpringBoot
tag:
  - controller
  - SpringBoot
  - Java
dir:
  order: 2
---
控制层，控制业务逻辑service，控制请求和响应，负责前后端交互。\
controller层主要调用Service层里面的接口控制具体的业务流程，不会在其中编写大量逻辑代码，同时也会接受并处理一些HTTP参数，例如session。
><font color=red>注意</font>：在CONTROLLER的实现类上也要加注解@RestController

## 遇到问题
```
Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured.
```
## 出现原因
>spring boot启动类上会加@SpringBootApplication注解，而spring boot 在启动的时候会默认加载org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration这个类，而DataSourceAutoConfiguration类使用了@Configuration注解向spring注入了dataSource bean，又因为项目中并没有关于dataSource相关的配置信息，所以当spring创建dataSource bean时因缺少相关的信息就会报错。

## 解决方法
### 方法一
在启动类上加@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class}) \
### 方法二
连接数据库
