/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 ```
    输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

    输入: s = "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

    输入: s = "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
         请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 ```
 */

/**
 * 思路：滑动窗口
 * @Date 2023-02-02
 * @param {String} s
 * @returns {Number}
 */
var lengthOfLongestSubstring = function (s) {
  const n = s.length;
  if (n < 2) return n;

  // 滑动窗口
  let slide = new Set();
  let max = 0,
    left = (right = 0);

  while (right < n) {
    const c = s[right];
    right++;

    // 什么时候收缩窗口
    while (slide.has(c)) {
      const d = s[left];
      left++;
      slide.delete(d);
    }

    // 什么时候往窗口里加
    slide.add(c);

    max = Math.max(max, right - left);
  }

  return max;
};

const s = "abcabcbb";
// const s = "bbb";

console.log(lengthOfLongestSubstring(s));
