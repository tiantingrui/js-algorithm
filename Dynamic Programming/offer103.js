// 剑指offer 103 最少的硬币数目 middle

/**
 * 解题思路：
 * 1. 这是一个动态规划的问题，因为它具备最优子结构
 * 2. 比如想求 amount=11 时的最少硬币数，此时只需要知道 amount=10 的最少硬币数
 *    dp[11] = dp[10] + dp[1]
 *
 * 解题步骤：
 * 1. 确定 base case
 *    dp[0] = 0  dp[n] 代表凑出总金额为n 所需的硬币数
 * 2. 确定状态
 *    状态就是原问题和子问题中会变化的量, 在此题中就是 【目标金额】
 *    conins 硬币数量 无限，不会变化
 *    唯一能变化的就是 【目标金额】，不断的向 base case 靠近
 * 3. 确定选择
 *    选择是什么？就是导致状态 [目标金额] 产生变化的行为
 *    amount = 10   1 -> 9  2->8   5 ->5
 *
 * 4. 明确 dp 数组的定义
 *    一般呢 dp 数组的索引就是上面所提到的状态, dp 数组的每个值就是我们需要计算的数据
 *    dp[i]的定义：当目标金额为 i 的时候，至少需要 dp[i] 个硬币凑出
 */

const coinChange = (coins, amount) => {
  // 因为索引存在 0 ， 所以我们声明了 amount + 1 长度的数组
  // 如果我们要凑出 amount 金额，我们最多所需要的硬币数量是 amount * 1
  let dp = new Array(amount + 1).fill(amount + 1); // amount + 1 作为一个无效的值

  dp[0] = 0

  for (let i = 0; i < dp.length; i ++) {
    for (let coin of coins) {
      if (i - coin < 0) {
        continue
      }
      // 比如 coins = [1, 2, 5] amount = 11
      // 选择1， dp[11] = 一个面额为1的硬币 + 剩余需要凑出dp[11 - 1]面额的最值解
      // 选择2， dp[11] = 一个面额为2的硬币 + 剩余需要凑出dp[11 - 2]面额的最值解
      // 选择5， dp[11] = 一个面额为5的硬币 + 剩余需要凑出dp[11 - 5]面额的最值解

      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return (dp[amount] === amount + 1) ? -1 : dp[amount]
};
