// 计算最近请求次数 lc933 easy
// inputs: [[], [1], [100], [3001], [3002]]
// outputs: [null, 1, 2, 3, 3]

/**
 * 解题思路：
 * 1. 越早发出的请求越早不在最近 3000ms 内的请求里
 * 2. 满足先进先出，考虑队列
 *
 * 解题步骤
 * 1. 新建一个队列
 * 2. 有新请求就入队，并把3000ms 前发出的请求出队
 * 3. 队列的长度就是最近请求次数
 */

var RecentCounter = function () {
  this.q = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.q.push(t);
  while (this.q[0] < t - 3000) {
    this.q.shift();
  }
  return this.q.length;
};

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
