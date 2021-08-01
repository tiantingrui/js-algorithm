// 树的 dfs
const treeDfs = (root) => {
  if (!root) return
  console.log(root.val)
  if (root.children) {
    root.children.forEach(treeDfs)
  }
}

// 树的 bfs
const treeBfs = (root) => {
  if (!root) return
  const q = [root]
  while (q.length) {
    const first = q.shift()
    console.log(first.val)
    if (first.children.length) {
      first.children.forEach(child => {
        q.push(child)
      })
    }
  }
}

// 二叉树的 dfs 、先序遍历、层序遍历
const btDfs = (root) => {
  if (!root) return 
  console.log(root.val)
  if (root.left) btDfs(root.left)
  if (root.right) btDfs(root.right)
}

// 二叉树的 bfs 
const btDfs = (root) => {
  if (!root) return 
  const q = [root]
  while (q.length) {
    const first = q.shift()
    console.log(first.val)
    if (root.left) q.push(root.left)
    if (root.right) q.push(root.right)
  }
}

// 二叉树的先序遍历 rec 
const preOrderRec = (root) => {
  if (!root) return 
  console.log(root.val)
  preOrderRec(root.left)
  preOrderRec(root.right)
}

// 二叉树的中序遍历 rec
const inOrderRec = (root) =>{
  if (!root) return 
  inOrderRec(root.left)
  console.log(root.val)
  inOrderRec(root.right)
}

// 二叉树的后序遍历 rec
const postOrderRec = (root) => {
  if (!root) return 
  postOrderRec(root.left)
  postOrderRec(root.right)
  console.log(root.val)
}

// 二叉树的先序遍历 stack 根 -> 左 -> 右
const preOrderStack = (root) => {
  if (!root) return 
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
   }
}

// 二叉树的中序遍历 stack 左 -> 根 -> 右
const inOrderStack = (root) => {
  if (!root) return 
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}

// 二叉树的后序遍历 stack 左 -> 右 -> 根 ， 前序遍历的变种,逆栈
const postOrderStack = (root) => {
  if (!root) return 
  const stack = [root]
  const res = []
  while (stack.length) {
    const n = stack.pop()
    res.push(n)
    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }
  while (res.length) {
    const n = res.pop()
    console.log(n.val)
  }
}

