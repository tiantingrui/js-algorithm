// 二叉树的最大深度

/**
 * 考察点：树的深度优先遍历
 * 
 * 解题思路：
 * 1. 求最大深度，考虑使用深度优先遍历
 * 2. 在深度优先遍历过程中，记录每个节点所在的层级，找出最大的层级即可。
 * 
 * 解题步骤：
 * 1. 新建一个变量，记录最大深度
 * 2. 深度优先遍历整棵树，并记录每个节点的层级，同时不断刷新最大深度这个变量
 * 3. 遍历结束返回最大深度这个变量
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  let res = 0
  const dfs = (n, level) => {
    if (!n) return 
    // console.log(n.val, level)
    // 只计算叶子节点的 level 
    if (!n.left && !n.right) {
      res = Math.max(res, level)
    }
    dfs(n.left, level + 1)
    dfs(n.right, level + 1)
  }
  dfs(root, 1)
  return res
};

/**
 * 时间复杂度：O(n)
 * 空间复杂度：最坏：O(n)，最好：O(logn)
 */
