// 路径总和 easy

/**
 * 考察点：深度优先遍历
 * 
 * 解题思路：
 * 1. 在深度优先遍历的过程中，记录当前路径的节点值的和
 * 2. 在叶子节点处，判断当前路径的节点值的和是否等于目标值
 * 
 * 解题步骤：
 * 1. 深度优先遍历二叉树，在叶子节点处，判断当前路径的节点值的和是否等于目标值，是就返回 true
 * 2. 遍历结束，如果没有匹配到目标值，就返回 false
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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  if (!root) return false;
  let res = false
  const dfs = (n, sum) => {
    // 叶子节点 且 sum值 = targetSum
    if (!n.left && !n.right && sum === targetSum) {
      res = true
    }
    if (n.left) dfs(n.left, sum + n.left.val)
    if (n.right) dfs(n.right, sum + n.right.val)
     
  }
  dfs(root, root.val)

  return res
};

/** 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)  -- 递归调用了函数调用堆栈
 */