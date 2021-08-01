// 买卖股票的最佳时间II easy


/**
 * 
 * 解题思路：
 * 1. 前提：上帝视角，知道未来的价格
 * 2. 局部最优：见好就收，见差就不动，不做任何长远打算
 * 
 * 解题步骤：
 * 1. 新建一个变量，用来统计总利润
 * 2. 遍历价格数组，如果当前价格比昨天高，就在昨天买，今天卖，否则就不交易
 * 3. 遍历结束后，返回所有利润之和
 * 
 * @param {number[]} prices 
 * @return {number}
 */
const maxProfit = (prices) => {
  let profit = 0;
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }
  return profit
} 

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
