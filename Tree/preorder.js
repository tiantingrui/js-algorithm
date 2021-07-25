// 先序遍历
const bt = require('./bt')

// 递归版本
// const preorder = (root) => {
//   if (!root) return 
//   // 1. 访问根节点
//   console.log(root.val)
//   // 2. 对根节点的左子树进行先序遍历（递归）
//   preorder(root.left)
//   // 3. 对根节点的右子树进行先序遍历（递归）
//   preorder(root.right)
// }

// 非递归版本，利用堆栈实现
const preorder = (root) => {
  if (!root) return 
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    // 访问根节点的值
    console.log(n.val)
    // 这里注意先推送 右子树，由于栈是后进先出
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }

}

preorder(bt)