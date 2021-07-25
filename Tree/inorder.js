// 中序遍历
const bt = require("./bt");

// const inorder = (root) => {
//   if (!root) return
//   inorder(root.left)
//   console.log(root.val)
//   inorder(root.right)
// }

// 用栈来实现 二叉树的中序遍历
const inorder = (root) => {
  if (!root) return;
  const stack = [];
  let p = root;
  while (stack.length || p) {
    // 将所有左子树推送到栈中
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};

inorder(bt);
