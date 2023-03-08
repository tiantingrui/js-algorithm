// 剑指 Offer 47. 礼物的最大价值

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) {
        f[i][j] = Math.max(f[i][j], f[i - 1][j]);
      }
      if (j > 0) {
        f[i][j] = Math.max(f[i][j], f[i][j - 1]);
      }
      f[i][j] += grid[i][j];
    }
  }
  return f[m - 1][n - 1];
};
