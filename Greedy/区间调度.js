// 有很多 [start, end] 的闭区间，请设计一个算法，算出这些区间中，最多有几个互不相交的区间！
// 比如 intvs = [[1, 3], [2, 4], [3, 6]]
// 这些区间最多有两个区间互不相交，即 [1, 3] [3, 6], intervalSchedule 函数此时就该返回 2 

// 1. 从可选的区间里，选择一个结束 end最小的区间 x
// 2. 把所有和 x 相交的区间 从 sum 中剔除掉
// 3. 重复一二的循环，之前选出的各种区间 x 就是我们所求的结果

const intervalSchedule = (intvs) => {
  if (intvs.length) return 0;

  const sortArray = intvs.sort((a, b) => a[1] - b[1]);  // 根据 end 升序排序
  let xEnd = sortArray[0][1];
  let count = 1; // 互不相交的区间 

  for (item of intvs) {
    const start = item[0]

    if (start >= xEnd) {
      count ++ 
      xEnd = item[1]
    }
  }
  return count
}