// 2373. 矩阵中的局部最大值 easy

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  const res = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          res[i][j] = Math.max(res[i][j], grid[x][y]);
        }
      }
    }
  }
  return res;
};
