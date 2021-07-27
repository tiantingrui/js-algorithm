const json = {
  a: {
    b: {
      c: 1
    }
  },
  d: [1, 2]
}

// 利用深度优先遍历来访问 json 中的所有值
const dfs = (n, path) => {
  // 1. 访问当前节点的值
  console.log(n, path)
  // 2. 对当前节点的所有children挨个进行深度优先遍历
  Object.keys(n).forEach(k => {
    dfs(n[k], path.concat(k))
  })
}

dfs(json, [])