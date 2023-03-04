// 982. 按位与为零的三元组 hard
/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
  const cnt = new Array(1 << 16).fill(0);
  for (const x of nums) {
    for (const y of nums) {
      ++cnt[x & y];
    }
  }
  let ans = 0;
  for (const x of nums) {
    for (let mask = 0; mask < 1 << 16; ++mask) {
      if ((x & mask) === 0) {
        ans += cnt[mask];
      }
    }
  }
  return ans;
};
