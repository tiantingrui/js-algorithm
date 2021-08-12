// 全排列 middle

/**
 * 解题思路：
 * 要求：1. 所有排列情况；2. 没有重复元素
 * 有出路、有死路
 * 考虑使用回溯算法
 * 
 * 解题步骤：
 * 1. 用递归模拟出所有情况
 * 2. 遇到包含重复元素的情况，就回溯
 * 3. 收集所有到达递归终点的情况，并返回
 * 
 * @param {number[]} nums 
 * @return {number[][]}
 */
const permute = (nums) => {
  const res = []
  const backtrack = (path) => {
    // 递归终点
    if (path.length === nums.length) {
      res.push(path)
    }
    nums.forEach(n => {
      if (path.includes(n)) {
        // 如果是死路（重复元素），回溯
        return 
      }
      backtrack(path.concat(n))
    })
  }
  backtrack([])
  return res
}

/**
 * 时间复杂度：O(n!) n! = 1x2x3x……x(n-1)xn
 * 空间复杂度：O(n)
 */