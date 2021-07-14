// 单链表反转

/**
 * 解题思路：
 * 反转两个节点：将 n + 1 的next 指向 n
 * 反转多个节点：双指针遍历链表，重复上述操作
 */

/**
 * 解题步骤：
 * 双指针一前一后遍历链表
 * 遍历过程中不断反转双指针
 */

function ListNode(val) {
  this.val = val 
  this.next = null
}

const reverseLinkedList = (head) => {
  const p1 = head
  const p2 = null
  while(p1 && p2.val) {
    const tmp = p1.next 
    p1.next = p2
    p2 = p1
    p1 = tmp
  }
  return p2
}