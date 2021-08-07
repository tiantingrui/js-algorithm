// 打家劫舍 easy

/**
 * 考察点：动态规划
 * 
 * 解题思路：
 * 1. f(k) = 从前K个房屋中能偷窃到的最大数额
 * 2. Ak = 第K个房屋的钱数
 * 3. f(k) = max(f(k - 2) + Ak, f(k - 1))
 * 4. 考虑使用动态规划
 * 
 * 解题步骤：
 * 1. 定义子问题：f(k) = max(f(k - 2) + Ak, f(k - 1))
 * 2. 反复执行：从 2 循环到 n，执行上述公式
 * 
 * @param {number[]} nums 
 * @return {number}  
 */
const rob = (nums) => {
  const len = nums.length;
  if (len === 0) return 0;
  const dp = [0, nums[0]];
  for (let i = 2; i <= len; i += 1) {
    // 注意这里要传 nums[i - 1] 为第 i 个房间的金额，不是 nums[i]
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
  }
  // dp 这个数组永远比 nums 的多一个长度 
  return dp[len]
  // return dp[dp.length - 1]
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

 const rob2 = (nums) => {
  const len = nums.length;
  if (len === 0) return 0;
  let dp0 = 0;
  let dp1 = nums[0]
  for (let i = 2; i <= len; i += 1) {
    const dp2 = Math.max(dp0 + nums[i - 1], dp1)
    dp0 = dp1
    dp1 = dp2
  }
  return dp1;
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */