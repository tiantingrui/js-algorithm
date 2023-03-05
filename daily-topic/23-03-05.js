// 1599. 经营摩天轮的最大利润

/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
  let ans = -1;
  let maxProfit = 0;
  let totalProfit = 0;
  let operations = 0;
  let customersCount = 0;
  const n = customers.length;
  for (let i = 0; i < n; i++) {
    operations++;
    customersCount += customers[i];
    let curCustomers = Math.min(customersCount, 4);
    customersCount -= curCustomers;
    totalProfit += boardingCost * curCustomers - runningCost;
    if (totalProfit > maxProfit) {
      maxProfit = totalProfit;
      ans = operations;
    }
  }
  if (customersCount === 0) {
    return ans;
  }
  const profitEachTime = boardingCost * 4 - runningCost;
  if (profitEachTime <= 0) {
    return ans;
  }
  if (customersCount > 0) {
    const fullTimes = Math.floor(customersCount / 4);
    totalProfit += profitEachTime * fullTimes;
    operations += fullTimes;
    if (totalProfit > maxProfit) {
      maxProfit = totalProfit;
      ans = operations;
    }
    const remainingCustomers = customersCount % 4;
    const remainingProfit = boardingCost * remainingCustomers - runningCost;
    totalProfit += remainingProfit;
    if (totalProfit > maxProfit) {
      maxProfit = totalProfit;
      operations++;
      ans++;
    }
  }
  return ans;
};
