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