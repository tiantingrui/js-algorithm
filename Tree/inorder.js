// 中序遍历
const bt = require(
  './bt'
)

const inorder = (root) => {
  if (!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}

inorder(bt)