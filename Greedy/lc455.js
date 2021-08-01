// 分饼干 easy


/**
 * 考察点：贪心算法
 * 
 * 解题思路：
 * 1. 局部最优：既能满足孩子，还消耗最少
 * 2. 先将”较小的饼干“分给”胃口最小“的孩子
 * 
 * 解题步骤：
 * 1. 对饼干数组和胃口数组升序排序
 * 2. 遍历饼干数组，找到能满足第一个孩子的饼干
 * 3. 然后继续遍历饼干数组，找到满足第二、三、……、n个孩子的饼干
 * 
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */


const findContentChildren = (g, s) => {
  const sortFunc = (a, b) => {
    return a - b
  }
  // 将 g, s 进行升序排序
  g.sort(sortFunc)
  s.sort(sortFunc)
  let i = 0;
  s.forEach(n => {
    if (n >= g[i]) {
      i += 1
    }
  })
  return i
}

/**
 * 时间复杂度：O(nlogN)
 * 空间复杂度：O(1)
 */