# 树

+ 一种 **分层** 数据的抽象模型
+ 前端工作中常用的树包括：DOM树、级联选择、树形控件
+ JS中没有树，但是可以用Object 和 Array 构建树
+ 树的常用操作：深度 / 广度优先遍历、先中后序遍历


### 什么是深度、广度优先遍历？
+ 深度优先遍历：尽可能深的搜索树的分支
+ 广度优先遍历：先访问离根节点最近的节点

#### 深度优先遍历算法口诀
1. 访问根节点
2. 对根节点的children挨个进行深度优先遍历

```js
// dfs.js

const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        },
      ]
    }
  ]
}

const dfs = (root) => {
  // 1. 访问根节点
  console.log(root.val);
  // 2. 对根节点的children挨个进行深度优先遍历
  // root.children.forEach(child => dfs(child))
  root.children.forEach(dfs)
}

dfs(tree)

```


#### 广度优先遍历算法口诀
1. 新建一个队列，把根节点入队
2. 把对头出队并访问
3. 把对头的children挨个入队
4. 重复第二、三步，直到队列为空
   
```js
// bfs.js

const bfs = (tree) => {
  // 1. 新建一个队列，把根节点入队
  const queue = [tree]
  // 4. 重复第二、三步，直到队列为空
  while (queue.length) {
    // 2. 队头出队，并访问
    const first = queue.shift()
    console.log(first.val)
    // 3. 把对头的children挨个入队
    first.children.length &&first.children.forEach(child => {
      queue.push(child)
    })
  }
}

bfs(tree)
```

## 二叉树

#### 什么是二叉树？
+ 树中每个节点最多只能有两个节点（可以是0, 1, 2）
+ JS 中通常用Object来模拟二叉树

```js
const binaryTree ={
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

```

#### 二叉树 先序遍历
**先序遍历算法口诀**
1. 访问根节点
2. 对根节点的左子树进行先序遍历（递归）
3. 对根节点的右子树进行先序遍历（递归）

#### 二叉树 中序遍历
**中序遍历算法口诀**
1. 对根节点的左子树进行中序遍历
2. 访问根节点
3. 对根节点的右子树进行中序遍历

#### 二叉树 后序遍历
**后序遍历算法口诀**
1. 对根节点的左子树进行后序遍历
2. 对根节点的右子树进行后序遍历
3. 访问根节点

### 非递归版 二叉树的先中后序遍历
**重点是利用栈这个数据结构去实现**


### leetcode 练习题目
- [ ] 二叉树的最大深度 lc104 easy
- [ ] 二叉树的最小深度 lc111 easy
- [ ] 二叉树的层序遍历 lc102 middle
- [ ] 二叉树的中序遍历 lc94 middle
- [ ] 路径总和 lc112 easy



## 前端与树
#### 场景一：遍历JSON的所有节点值
+ 考察点：**深度优先遍历**

```js

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

```

#### 场景二： 渲染Antd的树组件
+ 考察点：**深度优先遍历**

### 总结
+ 树是一种 **分层** 数据的抽象模型，在前端中广泛应用
+ 树的常用操作：
  + 深度/广度优先遍历 
  + 先中后序遍历

**dfs在前端中经常用到, 其他的四种遍历在面试中经常出现**

