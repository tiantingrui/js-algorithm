// 两数相加 middle

/**
 * 考察点：遍历链表
 */


/**
 * 解题步骤
 * 1. 新建一个空链表
 * 2. 遍历被相加的两个链表，模拟相加操作，将个位数追加到新链表上，将十位数保留到下一位去相加，……
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  // 创建一个空链表
  const l3 = new ListNode(0);
  // 使用指针指向链表头部
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  // carry 变量代表满十进位上要加的数
  let carry = 0;
  // 两个指针只要有一个没有遍历完成我们都继续遍历相加
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    const val = v1 + v2 + carry
    carry = Math.floor(val / 10)
    p3.next = new ListNode(val % 10)
    // 指针往后走一步
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }
  // 如果遍历结束后 carry 存在，放到链表最后面即可
  if (carry) p3.next = new ListNode(carry)
  return l3.next
}