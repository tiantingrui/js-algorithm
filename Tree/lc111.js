// 二叉树的最小深度

/**
 * 考察点：树的广度优先遍历
 *
 * 解题思路：
 * 1. 求最小深度，考虑使用广度优先遍历
 * 2. 在广度优先遍历过程中，遇到叶子节点，停止遍历，返回节点层级
 *
 * 解题步骤：
 * 1. 广度优先遍历整棵树，并记录每个节点的层级
 * 2. 遇到叶子节点，返回节点层级，停止遍历
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
const minDepth = (root) => {
  if (!root) return 0;
  const q = [[root, 1]];
  while (q.length) {
    // 取出队头，并访问
    const [n, level] = q.shift()
    console.log(n.val, level)
    // 如果遇到叶子节点直接返回 level 
    if (!root.left && !root.right) {
      return level
    }
    // 把队头的children 挨个入队
    if (n.left) q.push([n.left, level + 1])
    if (n.right) q.push([n.right, level + 1])
  }

};
