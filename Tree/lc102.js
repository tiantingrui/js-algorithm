// 二叉树的层序遍历 middle

/**
 * 考察点：树的广度优先遍历
 *
 * 解题思路:
 * 1. 层序遍历顺序就是广度优先遍历
 * 2. 不过在遍历的时候需要记录当前节点所处的层级，方便将其添加到不同的数组中
 * 
 * 解题步骤：
 * 1. 广度优先遍历二叉树
 * 2. 遍历过程中，记录每个节点的层级，并将其添加到不同的数组中
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
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (!root) return [];
  const q = [[root, 0]]
  const res = []
  while (q.length) {
    const [n, level] = q.shift()
    if (!res[level]) {
      res.push([n.val])
    } else {
      res[level].push(n.val)
    }
    if (n.left) q.push([n.left, level + 1])
    if (n.right) q.push([n.right, level + 1])
  }
  return res
};


/**
 * 第二种解法
 */
const levelOrder2 = (root) => {
  if (!root) return []
  const q = [root]
  const res = []
  while (q.length) {
    let len = q.length
    res.push([])
    while (len--) {
      const n = q.shift()
      res[res.length - 1].push(n.val)
      if (n.left) q.push(n.left)
      if (n.right) q.push(n.right)
    }
  }
  return res
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */