// 2379. 得到 K 个黑块的最少涂色次数
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let l = 0,
    r = 0,
    cnt = 0;
  while (r < k) {
    cnt += blocks[r] === "W" ? 1 : 0;
    r++;
  }
  let res = cnt;
  while (r < blocks.length) {
    cnt += blocks[r] === "W" ? 1 : 0;
    cnt -= blocks[l] === "W" ? 1 : 0;
    res = Math.min(res, cnt);
    l++;
    r++;
  }
  return res;
};
