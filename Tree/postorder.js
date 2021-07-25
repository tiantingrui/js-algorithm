// 后序遍历
const bt = require(
  './bt'
)

// const postorder = (root) => {
//   if (!root) return
//   postorder(root.left)
//   postorder(root.right)
//   console.log(root.val)
// }

// 用栈来实现 后序遍历
// 1. 将后序遍历的顺序给倒序一下，根 -> 右 -> 左，会发现和先序遍历很像
// 2. 在用一个栈去倒序输出就是后序遍历
const postorder = (root) => {
  if (!root) return
  const outputStack = []
  const stack = [root] // 类先序遍历的那个栈
  while (stack.length) {
    const n = stack.pop()
    // 这里访问根节点的操作把它推送到 outputstack 中就 OK 了！！！
    // console.log(n.val)
    outputStack.push(n)
    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }
  while (outputStack.length) {
    const n = outputStack.pop()
    console.log(n.val)
  }
}

postorder(bt)