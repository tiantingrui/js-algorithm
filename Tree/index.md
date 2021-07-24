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