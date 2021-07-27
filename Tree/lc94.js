// 二叉树的中序遍历 middle

/**
 * 考察点：中序遍历递归版和非递归版
 *
 * 解题思路：
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
 * @return {number[]}
 */

const inorderTraversal = (root) => {
  const res = []
  // 递归函数
  const rec = (n) => {
    if (!n) return 
    // 进行中序遍历
    rec(n.left)
    res.push(n.val)
    rec(n.right)
  }
  rec(root)

  return res
};

// 非递归版本实现 - 栈
const inorderTraversal2 = (root) => {
  const res = []
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    res.push(n.val)
    p = n.right
  }
  
  return res
};

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

