// 先序遍历
const bt = require('./bt')

const preorder = (root) => {
  if (!root) return 
  // 1. 访问根节点
  console.log(root.val)
  // 2. 对根节点的左子树进行先序遍历（递归）
  preorder(root.left)
  // 3. 对根节点的右子树进行先序遍历（递归）
  preorder(root.right)
}

preorder(bt)