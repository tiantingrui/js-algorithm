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

/**
 * 遍历数组是一个循环操作
 * 时间复杂度：O(n)
 */