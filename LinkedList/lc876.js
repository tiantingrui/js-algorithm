// 求链表中的中间结点

/**
 * 考察点：
 * 1. 遍历链表
 * 2. 快慢指针的使用
 */

/**
 * 解题思路：
 * 1. 使用一块一慢指针遍历链表，慢指针一次走一步
 *    快指针一次走两步，
 * 2. 当快指针走到头时，慢指针在中间位置
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
const middleNode = (head) => {
  let p1 = head; // 慢指针
  let p2 = head; // 快指针
  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return p1
}