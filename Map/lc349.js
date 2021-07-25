// 两个数组的交集 easy

/**
 * 解题思路：
 * 1. 求nums1 和 nums2 都有的值
 * 2. 用字典建立一个映射关系，记录 nums1 里有的值
 * 3. 遍历nums2，找出nums1 里也有的值
 * 
 * 解题步骤：
 * 1. 新建一个字典，遍历nums1, 填充字典
 * 2. 遍历 nums2, 遇到字典里的值就选出，并从字典中删除
 * 
 * @param {Array} nums1 
 * @param {Array} nums2 
 */

const intersection = (nums1, nums2) => {
  const map = new Map()
  nums1.forEach(n => {
    map.set(n, true)
  })
  const res = []
  nums2.forEach(n => {
    if (map.get(n)) {
      res.push(n);
      // 同时删除 map 中的 key ，防止后面重复
      map.delete(n)
    }
  })
  return res
}

/**
 * 复杂度分析：
 * 1. 时间复杂度：O(m + n)
 * 2. 空间复杂度：O(m) 就是map 存储 nums1 的长度 m
 */