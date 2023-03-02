// 面试题 05.02. 二进制数转字符串 middle

/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  let sb = "0.";
  while (sb.length <= 32 && num !== 0) {
    num *= 2;
    const digit = Math.floor(num);
    sb += digit;
    num -= digit;
  }
  return sb.length <= 32 ? sb : "ERROR";
};
