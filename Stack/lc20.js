// 有效的括号 easy

/**
 * 解题思路：
 * 输入: "{[]}"  输出 true
 * 1. 对于没有闭合的左括号而言，越靠后的左括号，对应的右括号越靠前。
 * 2. 满足后进先出，考虑用栈。
 */

/**
 * 解题步骤：
 * 1. 新建一个栈。
 * 2. 遍历字符串，遇到左括号入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配就返回 false
 * 3. 最后栈空了就合法，否则不合法。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  // 字符串是奇数或者是空 直接 false
  if (!s.length || s.length % 2 === 1) return false
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else {
      // 栈顶元素，数组的最后一位
      const top = stack(stack.length - 1);
      if (
        (top === "(" && c === ")") ||
        (top === "[" && c === "]") ||
        (top === "{" && c === "}")
      ) {
        // 如果类型匹配，出栈，进行下一轮操作
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

/**
 * 复杂度分析：
 * 时间复杂度： O(n)
 * 空间复杂度： O(n)
 */
