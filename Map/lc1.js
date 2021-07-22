// 两数之和 easy


/**
 * 解题思路：
 * 1.把nums想象成相亲者
 * 2.把target想象成匹配条件
 * 3.用字典建立一个婚姻介绍所，存储相亲者的数字（key） 和 下标（value）
 * 
 * 解题步骤
 * 1. 新建一个字典map 作为婚姻介绍所
 * 2. nums 里的值，逐个来介绍所找对象，没有合适的就先记在字典里，有的话就返回字典中的下标
 * 
 * 
 * @param {Array} nums 
 * @param {Number} target 
 */
const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const n2 = target - n
    if (map.has(n2)) {
      return [map.get(n2), i]
    } else {
      map.set(n, i)
    }
  }
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * 后续优化的点：时间换空间
 */