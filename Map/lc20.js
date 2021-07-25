// 有效的括号 easy

const isValid = (s) => {
  const stack = []
  const map = new Map()
  // 存入映射关系
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    // 如果字典中存在 key 值，推到栈中
    if (map.has(c)) {
      stack.push(c)
    } else {
      // 取栈顶元素做匹配
      const t = stack[stack.length - 1]
      if (map.get(t) === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0

}

/**
 * 时间复杂度： O(n)
 * 空间复杂度: O(n) , 注意map 是一个常量复杂度
 */