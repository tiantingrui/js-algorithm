// 面试题 17.05.  字母与数字

/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
  const indices = new Map();
  indices.set(0, -1);
  let sum = 0;
  let maxLength = 0;
  let startIndex = -1;
  const n = array.length;
  for (let i = 0; i < n; i++) {
    if (isLetter(array[i][0])) {
      sum++;
    } else {
      sum--;
    }
    if (indices.has(sum)) {
      const firstIndex = indices.get(sum);
      if (i - firstIndex > maxLength) {
        maxLength = i - firstIndex;
        startIndex = firstIndex + 1;
      }
    } else {
      indices.set(sum, i);
    }
  }
  if (maxLength === 0) {
    return [];
  }
  return [...array.slice(startIndex, startIndex + maxLength)];
};

const isLetter = (ch) => {
  return ("a" <= ch && ch <= "z") || ("A" <= ch && ch <= "Z");
};
