# 链表



一个经典的链表应用场景，**LRU缓存淘汰算法**

> LRU（Least Recently Used）最近最少使用策略

后面部分我们会用数组和链表都来实现 LRU



### 什么是链表

链表通过指针将一组零散的内存块串联在一起。其中，我们把内存块称为链表的“结点”。为了将所有的结点串起来，每个链表的结点除了存储数据之外，还需要记录链上的下一个结点的地址。

我们把这个记录下个结点地址的指针叫做**后继指针 next**

![img](https://static001.geekbang.org/resource/image/b9/eb/b93e7ade9bb927baad1348d9a806ddeb.jpg)

我们习惯性地把第一个结点叫作头结点，把最后一个结点叫作尾结点。其中，**头结点用来记录链表的基地址**。有了它，我们就可以**遍历**得到整条链表。而尾结点特殊的地方是：指针不是指向下一个结点，而是**指向一个空地址 NULL**，表示这是链表上最后一个结点。

与数组一样，链表也支持数据的查找、插入和删除操作。

针对链表的插入和删除操作，我们只需要考虑相邻结点的指针改变，所以对应的时间复杂度是 O(1)。

链表随机访问的性能没有数组好，需要 O(n) 的时间复杂度。



### 链表的分类

+ 单链表

![img](https://static001.geekbang.org/resource/image/cb/0b/cbc8ab20276e2f9312030c313a9ef70b.jpg)

+ 双向链表

![img](https://static001.geekbang.org/resource/image/86/55/86cb7dc331ea958b0a108b911f38d155.jpg)

单向链表只有一个方向，结点只有一个后继指针 next 指向后面的结点。而双向链表，顾名思义，它支持两个方向，每个结点不止有一个后继指针 next 指向后面的结点，还有一个前驱指针 prev 指向前面的结点。

+ 循环列表

![img](https://static001.geekbang.org/resource/image/d1/91/d1665043b283ecdf79b157cfc9e5ed91.jpg)



### 链表 VS 数组性能大比拼

![img](https://static001.geekbang.org/resource/image/4f/68/4f63e92598ec2551069a0eef69db7168.jpg)



### 链表常用操作

+ 遍历链表
+ 链表的插入、删除操作
+ 反转链表



#### 链表结点的创建

创建链表结点，需要一个构造函数：

```js
function ListNode(val) {
  this.val = val
  this.next = null
}
```

在使用构造函数创建结点时，传入 val （数据域对应的值内容）、指定 next （下一个链表结点）即可：

```js
const node = new ListNode(1)
node.next = new ListNode(2)
```

以上，就创建出了一个数据域值为1，next 结点数据域值为2的链表结点：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/816ad2c296f74df78342093e4d6edcf6~tplv-k3u1fbpfcp-zoom-1.image)

#### 链表元素的添加

```js
// 如果目标结点本来不存在，那么记得手动创建
const node3 = new ListNode(3)     
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next
// 把node1的 next 指针指向 node3
node1.next = node3
```

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/faf00f911dc04864ae52a6343dacafa2~tplv-k3u1fbpfcp-zoom-1.image)



#### 链表元素的删除

```js
node1.next = node3.next
```

在涉及链表删除操作的题目中，重点不是定位目标结点，而是**定位目标结点的前驱结点**。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc6a1f482c0c4b24bf791171c43167d9~tplv-k3u1fbpfcp-zoom-1.image)



#### 留意边界条件处理

+ 如果链表为空时，代码是否能正常工作？
+ 如果链表只包含一个结点时，代码是否能正常工作？
+ 如果链表只包含两个结点时，代码是否能正常工作？
+ 代码逻辑在处理头结点和尾结点的时候，是否能正常工作？





### leetcode 练习题目

- [x] 单链表反转  lc 206 easy
  - [x] 拓展：局部反转一个列表：https://juejin.cn/book/6844733800300150797/section/6844733800354676743 (**阿里原题**) middle
- [x] 两数相加 lc2 middle
- [x] 删除链表中的节点 lc 237 easy
- [x] 删除排序链表中的重复元素 lc83 easy
- [x] 删除链表倒数第n个结点 lc 19 middle
- [x] 链表中环的检测  lc 141 easy
- [x] 两个有序的链表合并 lc 21 easy
- [x] 合并 K 个升序链表 lc 23 hard
- [x] 求链表的中间结点 lc 876 easy
