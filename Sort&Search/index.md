# 排序和搜索

#### 排序和搜索是什么？
+ 排序：把某个乱序的数组变成升序或者降序的数组
+ 搜索：找出数组中某个元素的下标

#### JS 中的排序和搜索
+ JS中的排序：数组的 sort 方法
+ JS中的搜索：数组的 indexOf 方法

## 排序算法
+ 冒泡排序
+ 选择排序
+ 插入排序
+ 归并排序
+ 快速排序
+ ……

#### JS 实现 冒泡排序

**冒泡排序的思路**
1. 比较所有相邻元素，如果第一个比第二个大，则交换它们
2. 一轮下来，可以保证最后一个数是最大的
3. 执行 n - 1 轮，就可以完成排序

```js
// 冒泡排序

Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i += 1) {
    for (let j = 0; j < this.length - 1 - i; j += 1) {
      if (this[j] > this[j + 1]) {
        const tmp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = tmp
      }
    }
  }
}

const arr = [5, 4, 3, 2, 1]
arr.bubbleSort()
```
+ 时间复杂度：O(n^2) - 两个嵌套循环


#### JS 实现 选择排序

**选择排序的思路**
1. 找出数组中的最小值，选中它并将其放置在第一位
2. 接着找到第二小的值，选中它并将其放置在第二位
3. 以此类推，执行 n - 1 轮

```js
// 选择排序

Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i += 1 ) {
    let indexMin = i;
    for (let j = i; j < this.length; j += 1) {
      if (this[j] < this[indexMin]) {
        indexMin = j 
      }
    }
    if (indexMin !== i) {
      const tmp = this[i]
      this[i] = this[indexMin]
      this[indexMin] = tmp
    }
  }
}

const arr = [5, 4, 3, 2, 1]
arr.selectionSort()
```
+ 时间复杂度：同冒泡排序一样，都是两个嵌套循环，都是 O(n^2)

#### JS 实现 插入排序

**插入排序的思路**
+ 从第二个数开始往前比
+ 比它大就往后排
+ 以此类推进行到最后一个数

```js
// 插入排序
Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i += 1 ) {
    // 1. 第二个数往前比
    const tmp =this[i]
    let j = i;
    while (j > 0) {
      // 如果第二个数比前一个数大, 后移
      if (this[j - 1] > tmp) {
        this[j] = this[j - 1] 
      } else {
        break
      }
      j -= 1
    }
    this[j] = tmp
  }
}

const arr = [5, 4, 3, 2, 1]
arr.insertionSort()
```
+ 时间复杂度：同冒泡排序一样，都是两个嵌套循环，都是 O(n^2)


#### JS 实现 归并排序
- 火狐浏览器曾用归并排序作为排序算法
**归并排序的思路**
1. 分：把数组劈成两半，再递归地对子数组进行”分“操作，知道分成一个个单独的数
2. 合：把两个数合并为有序数组，再对有序数组进行合并，知道全部子数组合并为一个完整数组

**合并两个有序数组**
1. 新建一个空数组 res, 用于存放最终排序后的数组
2. 比较两个有序数组的头部，较小者出队并推入 res 中
3. 如果两个数组还有值，就重复第二步

```js

// 归并排序

Array.prototype.mergeSort = function () {
  // 分
  const rec = (arr) => {
    if (arr.length === 1) return arr
    // 获取中间下标
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid)
    const right = arr.slice(mid.slice)
    const orderLeft = rec(left)
    const orderRight = rec(right)
    const res = []
    // 合
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  const res = rec(this)
  res.forEach((n, i) => {this[i] = n})
}

const arr = [5, 4, 3, 2, 1]
arr.mergeSort()

/**
 * 分的时间复杂度是 O(logN)
 * 合的时间复杂度是 O(n)
 * 时间复杂度：O(nlogN)
 */
```
#### JS 实现 快速排序
- 谷歌浏览器曾用归并排序作为排序算法

**快速排序的思路**
+ 分区：从数组中任意选择一个”基准“，所有比基准小的元素放在基准前面，比基准大的放在基准的后面
+ 递归：递归地对基准前后的子数组进行分区

```js
// 快速排序

Array.prototype.quickSort = function () {

  const rec = (arr) => {
    if (arr.length === 1) {
      return arr
    }
    const left = []
    const right = []
    const mid = arr[0]
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  const res = rec(this)
  res.forEach((n, i) => {this[i] = n})

}

const arr = [5, 4, 3, 2, 1]
arr.quickSort()

/**
 * 递归地时间复杂度是O(logN)
 * 分区操作的时间复杂度是 O(n)
 * 时间复杂度：O(nlogN)
 */
```




## 搜索算法
+ 顺序搜索
+ 二分搜索
+ ……

#### JS 实现 顺序搜索

**顺序搜索的思路**
1. 遍历数组
2. 找到跟目标值相等的元素，就返回它的下标
3. 遍历结束后，如果没有搜索到目标值，就返回 -1

```js
// 顺序搜索

Array.prototype.sequentialSearch = function(item) {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === item) {
      return i;
    }
  }
  return -1;
}
const res = [1, 2, 3, 4, 5].sequentialSearch(3)
```

#### JS 实现 二分搜索
+ 二分搜索的前提是这个数组是有序的，又成折半搜索

**二分搜索的思路**
+ 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束
+ 如果目标值大于或者小于中间，则在大于或者小于中间元素的那一半数组中搜索


```js
// 二分搜索

Array.prototype.binarySearch = function(item) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = this[mid]
    if (element < item) {
      low = mid + 1 
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

const res = [1, 2, 3, 4, 5].binarySearch(3)

/**
 * 每一次比较都使搜索范围缩小一半
 * 时间复杂度：O(logN)
 */
```




### leetcode 练习题目
- [ ] lc21 合并两个有序链表
- [ ] lc374 猜数字大小


