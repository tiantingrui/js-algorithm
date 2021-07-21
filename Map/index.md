# 字典 (Dict ----- Map)

+ 与集合类似，字典也是一种存储唯一值的数据结构，但它是以 **键值对** 的形式来存储。
+ ES6中有字典，名为 Map (突出映射的功能)
+ 字典的常用操作：键值对的增删改查

```js
const m = new Map()
// 增
m.set('a', 'aa')
m.set('b', 'bb')

// 删
m.delete('b')
// 删除所有的键
// m.clear()

// 改
m.set('a', 'aaa')

// 查
m.get('a')
m.get('b')

```


### leetcode 练习题目
- [ ] 两个数组的交集 lc349 easy
- [ ] 有效的括号 lc20 easy
- [ ] 两数之和 lc1 easy
- [ ] 无重复字符的最长子串 lc3 middle
- [ ] 最小覆盖子串 lc76 middle
