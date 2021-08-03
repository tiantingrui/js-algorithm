// 猜数字大小 easy

/**
 * 考察点：二分搜索，分而治之思想（二分搜索也是分而治之思想的提现）
 * 
 * 解题思路：
 * 1. 二分搜索，统一具备”分、解、合“的特性
 * 2. 考虑选择分而治之
 * 
 * 解题步骤
 * 1. 分：计算中间元素，分割数组
 * 2. 解：递归地在较大或者较小子数组进行二分搜索
 * 3. 合：不需要此步，因为在子数组中搜到就返回了
 */

const guessNumber = (n) => {
  const rec = (low, high) => {
    if (low > high) {
      return 
    }
    const mid = Math.floor((low + high) / 2)
    const res = guess(mid)
    if (res === 0) {
      return mid
    } else if (res === 1) {
      return rec(mid + 1, high)
    } else {
      return rec(1, mid - 1)
    }
  } 
  return rec(1, n)
}

/**
 * 时间复杂度：O(logN)
 * 空间复杂度：递归调用堆栈 O(logN)
 */