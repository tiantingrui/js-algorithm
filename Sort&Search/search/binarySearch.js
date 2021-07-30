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