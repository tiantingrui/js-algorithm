// 096. 花括号展开 II hard

/**
 * @param {string} expression
 * @return {string[]}
 */
function braceExpansionII(expression) {
  const dfs = (exp) => {
    let j = exp.indexOf("}");
    if (j === -1) {
      s.add(exp);
      return;
    }
    let i = j;
    while (exp.charAt(i) !== "{") {
      --i;
    }
    let a = exp.substring(0, i);
    let c = exp.substring(j + 1);
    for (const b of exp.substring(i + 1, j).split(",")) {
      dfs(a + b + c);
    }
  };
  const s = new Set();
  dfs(expression);
  return Array.from(s).sort();
}
