# 集合 Set

+ 一个无序且唯一的数据结构
+ ES6 提供了 Set 这种数据结构


### Set 的使用场景
+ 数组去重
+ 判断元素是否在集合中
+ 求两个数组的交集


#### 数组去重
```js
const arr = [1, 1, 2, 2]
const arr2 = [...new Set(arr)]
```

#### 判断元素是否在集合中
```js
const set = new Set(arr)
const has = set.has(2)
```

#### 求交集
```js
const set2 = new Set([2, 3])
const set3 = new Set([...set].filter(item => set2.has(item)))
```

### 前端与集合：使用ES6的Set

#### Set操作
+ 使用 Set 对象：new、add、delete、has、size
+ 迭代Set：多种迭代方法、Set 与 Array 互转，求交集/差集

```js
let mySet = new Set()

// 添加 add
mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('terry')
let o = {a: 1, b: 2}
mySet.add(o)
mySet.add({a: 1, b: 2})

// has 
const has = mySet.has(1)

// delete
mySet.delete(5)

// 迭代一个 set

for (let item of mySet) console.log(item)
for (let item of mySet.keys()) console.log(item)
for (let item of mySet.values()) console.log(item)
for (let [key, value] of mySet.entries()) console.log(key, value)

// Set 转 Array
const myArr = [...mySet]
const myArr2 = Array.from(mySet)

// Array 转 Set
const mySet2 = new Set([1, 2, 3, 4])

// 求交集
const intersection = new Set([...mySet].filter(x => mySet2.has(x)))

// 求差集
const difference = new Set([...mySet].filter(x => !mySet2.has(x)))
```




### leetcode 练习题目
- [ ] 两个数组的交集 lc349 easy
