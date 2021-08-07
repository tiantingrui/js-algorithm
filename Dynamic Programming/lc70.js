// 爬楼梯 easy


/**
 * 考察点：动态规划
 * 
 * 解题思路：
 * 1. 爬到第 n 阶可以再第 n-1 阶爬一个台阶，或者在第 n-2 阶爬2个台阶
 * 2. F(n) = F(n - 1) + F(n - 2)
 * 3. 使用动态规划
 * 
 * 解题步骤：
 * 1. 定义子问题：F(n) = F(n - 1) + F(n - 2)
 * 2. 反复执行：从 2 循环到 n，执行上述公式
 *  
 * @param {number} n 
 * @return {number} 
 */
const climbStairs = (n) => {
  if (n < 2) return 1;
  const dp = [1, 1]
  for (let i = 2; i <= n; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

const climbStairs = (n) => {
  if (n < 2) return 1;
  let dp0 = 1;
  let dp1 = 1;
  for (let i = 2; i <= 2; i += 1) {
    const tmp = dp0;
    dp0 = dp1;
    dp1 = dp1 + tmp
  }
  return dp1
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */