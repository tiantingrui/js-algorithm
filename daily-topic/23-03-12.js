// 1617. 统计子树中城市之间最大距离

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function (n, edges) {
  const adj = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  for (const edge of edges) {
    const x = edge[0] - 1;
    const y = edge[1] - 1;
    adj[x].push(y);
    adj[y].push(x);
  }

  const ans = new Array(n - 1).fill(0);
  for (let i = 1; i < 1 << n; i++) {
    const root = 32 - numberOfLeadingZeros(i) - 1;
    mask = i;
    diameter = 0;
    dfs(root, adj);
    if (mask === 0 && diameter > 0) {
      ans[diameter - 1]++;
    }
  }
  return ans;
};

const dfs = (root, adj) => {
  let first = 0,
    second = 0;
  mask &= ~(1 << root);
  for (const vertex of adj[root]) {
    if ((mask & (1 << vertex)) !== 0) {
      mask &= ~(1 << vertex);
      const distance = 1 + dfs(vertex, adj);
      if (distance > first) {
        second = first;
        first = distance;
      } else if (distance > second) {
        second = distance;
      }
    }
  }
  diameter = Math.max(diameter, first + second);
  return first;
};

const numberOfLeadingZeros = (i) => {
  if (i === 0) return 32;
  let n = 1;
  if (i >>> 16 === 0) {
    n += 16;
    i <<= 16;
  }
  if (i >>> 24 === 0) {
    n += 8;
    i <<= 8;
  }
  if (i >>> 28 === 0) {
    n += 4;
    i <<= 4;
  }
  if (i >>> 30 === 0) {
    n += 2;
    i <<= 2;
  }
  n -= i >>> 31;
  return n;
};
