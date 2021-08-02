// 翻转二叉树 easy

/**
 * 考察点：分而治之
 * 
 * 解题思路
 * 1. 先翻转左右子树，再讲子树换个位置
 * 2. 符合”分，解，合“特性
 * 3. 考虑选择分而治之
 * 
 * 解题步骤：
 * 1. 分：获取左右子树
 * 2. 解：递归地翻转左右子树
 * 3. 合：将翻转后的左右子树换个位置放到根节点上
 * 
 */


const invertTree = (root) => {
  if (!root) return null;
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left)
  }
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n) -> O(h) h 是树的高度
 */
