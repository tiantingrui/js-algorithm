// 1653. 使字符串平衡的最少删除次数 middle

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let leftb = 0,
    righta = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      righta++;
    }
  }
  let res = righta;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "a") {
      righta--;
    } else {
      leftb++;
    }
    res = Math.min(res, leftb + righta);
  }
  return res;
};
