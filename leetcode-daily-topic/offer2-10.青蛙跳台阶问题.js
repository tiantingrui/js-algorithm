/**
 *
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

    答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路：动态规划 (状态转移方程 dp[i] = dp[i-1] + dp[i-2])
 * @Date 2023-01-30
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
};

// 状态压缩解法
var numWays2 = function (n) {
  let a = 1,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let tmp = b;
    b = (a + b) % 1000000007;
    a = tmp;
  }

  return b;
};
