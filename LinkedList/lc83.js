// 删除排序链表中的重复元素 easy

/**
 * 考察点：
 * 1. 遍历链表操作
 * 2. 删除链表中的节点操作
 */

/**
 * 解题思路：
 * 1. 因为链表是有序的，所以重复元素一定相邻
 * 2. 遍历链表，如果发现当前元素和下个元素值相同，就删除下个元素值
 */

/**
 * 解题步骤：
 * 1. 遍历链表，如果发现当前元素值和下个元素值相同，删除下个元素值
 * 2. 遍历结束，返回原链表的头部
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let p1 = head;
  while (p1 && p1.next) {
    if (p1.val === p1.next.val) {
      p1.next = p1.next.next;
    } else {
      // 如果后面几个元素都重复走上面的逻辑就可以，只有前后两个元素值不一样才往下走
      p1 = p1.next
    }
  }
  return head
};
