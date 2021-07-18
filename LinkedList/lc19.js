// 删除链表倒数第n个结点 middle 

/**
 * 考察点：
 * 1. 遍历链表
 * 2. 删除链表中的结点操作（找要删除结点的前一个结点）
 * 3. 创建 dummy 结点的操作
 * 4. 快慢指针的理解和使用
 */

/**
 * 解题思路：
 * 1. 运用快慢指针，先让 快指针先走 n 步
 * 2. 然后 快慢指针一起走，遍历条件是 快指针是否走到了最后一个结点
 * 3. 当遍历结束，快指针走到了最后一个 结点，慢指针也刚好走到了要删除结点的前一个结点，
 * 4. 慢指针删除下一个结点操作：slow.next = slow.next.next
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
 * @param {number} n
 * @return {ListNode}
 */
 const removeNthFromEnd = (head, n) => {
  // 先创建一个 dummy 结点
  const dummy = new ListNode(0);
  dummy.next = head;

  // 创建快慢指针指向 dummy
  let fast = dummy;
  let slow = dummy;

  // 先让快指针走 n 步
  while (n !== 0) {
      fast = fast.next;
      n--
  }

  // 快慢指针一起走
  while (fast.next) {
      fast = fast.next;
      slow = slow.next;
  }
  // 快指针走到最后一个结点，慢指针也刚好走到了要删除节点的前一个结点
  slow.next = slow.next.next;

  return dummy.next
};