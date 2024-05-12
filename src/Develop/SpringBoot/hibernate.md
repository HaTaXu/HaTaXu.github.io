---
title: hibernate
category: SpringBoot
tag:
  - hibernate
  - SpringBoot
  - Java
  - 数据库
order: 3
---
`Hibernate`就是一个持久层的`ORM`(`Object Relation Mapping`)框架。

# 三种状态
`hibernate`中有三种状态

## 瞬时态`Transient`
由`new`操作符创建，且尚未与`Hibernate Session`关联的对象被认定为瞬时的。\
瞬时对象不会被持久化到数据库中，也不会被赋予持久化标识`identifier`。\
如果瞬时对象在程序中没有被引用，它会被垃圾回收器`garbage collector`销毁。\
使用`Hibernate Session`可以将其变为持久状态（`Hibernate`会自动执行必要的`SQL`语句）。

瞬时状态的特点有：
1. 与数据库中的记录没有任何关联，也就是没有与其相关联的数据库记录。
2. 与`Session`没有任何关系，也就是没有通过`Session`对象的实例对其进行任何持久化的操作。\
举例：
```java
User user=new User(); // user是一个瞬时对象，在数据库的表中是没有记录和该对象相对应的。和session没有关系。
user.setName(“ddd”);
user.setBirthday(new Date());
session.save(user); //持久化状态
```

## 持久态`Persistent`
持久是实例在数据库中有对应的记录，并拥有一个持久化标识`identifier`。\
持久的实例可能是刚被保存的，或刚被加载的，无论哪一种，按定义，它存在于相关联的`Session`作用范围内。\
`Hibernate`会检测到处于持久状态的对象的任何改动，在当前操作单元`unit of work`执行完毕时将对象数据`state`与数据库同步`synchronize`。\
开发者不需要手动执行`Update`。\
将对象从持久状态编程瞬时状态同样也不需要手动执行`delete`语句。

持久对象具有如下特点：
1. 和`session`实例关联；
2. 在数据库中有与之关联的记录。
3. `Hibernate`会根据持久态对象的属性的变化而改变数据库中的相应记录。
举例：
```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();
session.save(stu); // persistent持久化状态
System.out.println(stu);
tx.commit();
session.close(); //执行close()方法之后，就会由持久对象转换成脱管对象
System.out.println(stu); // 脱管对象
```
## 脱管态`Detached`
与持久状态对象关联的`Session`被关闭后，对象就变为脱管的。\
对脱管对象的引用依然有效，对象可继续被修改。\
脱管对象如果重新关联到某个新的`Session`上，会再次转变为持久的（在脱管`Detached`其间的改动将被持久化到数据库）。\
这个功能使得一种编程模型，即中间会给用户思考时间的长时间运行的操作单元。\
脱管对象拥有数据库的识别值，可通过`update()`、`saveOrUpdate()`等方法，转变成持久对象。

脱管对象具有如下特点：
1. 本质上与瞬时对象相同，在没有任何变量引用它时，`JVM`会在适当的时候将它回收；
2. 比瞬时对象多了一个数据库记录标识值。
3. 不在于`Session`相关联。
4. 脱管对象一定是由持久态对象转化而来。
