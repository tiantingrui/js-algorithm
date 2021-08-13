// 子集 middle

/**
 * 解题思路：
 * 要求：1. 所有子集；2. 没有重复元素
 * 有出路、有死路
 * 考虑使用回溯算法
 * 
 * 解题步骤：
 * 1. 用递归模拟出所有情况
 * 2. 保证接的数字都是后面的数字
 * 3. 收集所有到达递归终点的情况，并返回。
 * 
 * @param {number[]} nums
 * @return {number[][]} 
 */
const subsets = (nums) => {
  const res = []
  const backtrack = (path, l, start) => {
    if (path.length === l) {
      res.push(path)
      return 
    }
    for (let i = start; i < nums.length; i += 1) {
      backtrack(path.concat(nums[i]), l, i + 1)
    }
  }
  for (let i = 0; i < nums.length; i += 1) {
    backtrack([], i, 0)
  }
  return res
}

/**
 * 时间复杂度：O(2^n) 因为每个元素都有两种可能（存在或不存在）
 * 空间复杂度：O(n)
 */