/**
 *
 * 给定数组 people 。people[i]表示第 i 个人的体重 ，船的数量不限，每艘船可以承载的最大重量为 limit。

    每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

    返回 承载所有人所需的最小船数 。

    ```
    输入：people = [1,2], limit = 3
    输出：1
    解释：1 艘船载 (1, 2)

    输入：people = [3,2,2,1], limit = 3
    输出：3
    解释：3 艘船分别载 (1, 2), (2) 和 (3)

    输入：people = [3,5,3,4], limit = 5
    输出：4
    解释：4 艘船分别载 (3), (3), (4), (5)
    ```

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/boats-to-save-people
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路： 贪心算法（先让最轻的和最重的组 cp 看是否能不超过 limit , 如果不行，让最重的单独上一只船）
 * @Date 2023-01-29
 * @param {Array} people
 * @param {Number} limit
 * @returns
 */
const numRescueBoats = (people, limit) => {
  let num = 0;
  people.sort((a, b) => a - b);
  let light = 0;
  let heavy = people.length - 1;
  while (light <= heavy) {
    if (people[light] + people[heavy] <= limit) {
      ++light;
    }
    --heavy;
    ++num;
  }
  return num;
};
