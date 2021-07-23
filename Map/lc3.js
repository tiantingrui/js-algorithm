// 无重复字符的最长子串 lc3 middle

/**
 * 解题思路:
 * 1. 先找出所有的不包含重复字符的子串
 * 2. 找出长度最大那个子串，返回其长度即可
 * 
 * 解题步骤：
 * 1. 用双指针维护一个滑动窗口，用来剪切子串
 * 2. 不断移动右指针，遇到重复字符，就把左指针移动到重复字符的下一位
 * 3. 过程中，记录所有窗口的长度，并返回最大值
 */

const lengthOfLongestSubstring = (s) => {
  let l = 0
  let res = 0
  let map = new Map()
  for (let r = 0; r < s.length; r ++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      // 遇到重复字符，l 走到字典里之前记录的 重复字符的下标位置 的下一个
      l = map.get(s[r]) + 1
    }
    res = Math.max(res, r - l + 1);
    map.set(s[r], r)

  }
  return res
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(m) , m 是字符串中不重复的字符
 */
