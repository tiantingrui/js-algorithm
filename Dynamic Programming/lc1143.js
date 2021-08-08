// lc1143 &&  剑指 Offer II 095. 最长公共子序列，简称 LCS. middle

// 典型的二维动态规划, 子序列是可以不连续的，但是顺序必须是 顺序的

/**
 * 解题思路：
 * 1. 明确dp数组的含义
 *    对于两个字符串 s1 和 s2，我们一般会构造这样一个 二维 dp 表
 *    dp[i][j] ： 对于 s1[1...i]和 s2[1....j] ，它们的 LCS 的长度为 dp[i][j] 
 * 2. 定义 base case 
 *    咱们表里用来索引为 0 的行和列便是空字符串，也就是说 dp[0][j] 和 dp[i][0] 都应该是base case 
 *    比如 dp[0][3]=0 的含义是 ”“ 和 ”abc“ 的 lcs 长度为 0 
 * 3. 确定状态转移方程
 *    对于 s1 和 s2 的每个字符，我们都有什么选择？要么在 lcs 中，要么不在
 *    所以说，如果某个字符存在于 lcs 中，那么这个字符一定同事存在于 s1 和 s2
 *    s1[i]  === s2[j], 这个字符一定存在于 lcs，此时lcs的长度 + 1，
 *    s1[i]  !== s2[j], 说明这两个字符里至少有一个不存在于 lcs中，我们需要从两个 之中选择一个最大的 Math.max(dp[i-1][j], dp[i][j-1])
 * 
 * 
 * @param {string} text1 
 * @param {string} text2 
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
  let n = text1.length;
  let m = text2.length;
  // 创建一个二维数组
  let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0))
  for (let i = 1; i < n; i ++) {
    for (let j = 1; j <= m; j ++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }
  return dp[n][m]
};