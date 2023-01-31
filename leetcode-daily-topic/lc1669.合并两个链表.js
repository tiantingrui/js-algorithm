/**
 * 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。

请你将 list1 中下标从 a 到 b 的全部节点都删除，并将list2 接在被删除节点的位置。


```
输入：list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
输出：[0,1,2,1000000,1000001,1000002,5]
解释：我们删除 list1 中下标为 3 和 4 的两个节点，并将 list2 接在该位置。上图中蓝色的边和节点为答案链表。

输入：list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
输出：[0,1,1000000,1000001,1000002,1000003,1000004,6]

```

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/merge-in-between-linked-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @Date 2023-01-31
 * 思路，preA 定位到 a位置之前，afterB 定位到 b位置之后，preA连接list2然后再连接afterB
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let preA = list1;
  let afterB = list1;

  for (let i = 0; i < a - 1; i++) {
    preA = preA.next;
  }
  for (let i = 0; i < b + 1; i++) {
    afterB = afterB.next;
  }
  preA.next = list2;

  while (preA.next) {
    preA = preA.next;
  }
  preA.next = afterB;

  return list1;
};
