// 局部反转一个链表 middle -> hard

// topic: 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。 1 ≤ m ≤ n ≤ 链表长度。
// e.g.
// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL


/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 入参是头结点、m、n
const reverseBetween = function(head, m, n) {
  const dummy = new ListNode();
  dummy.next = head;
  let p = dummy;

  for (let i = 0; i < m -1; i++) {
    p = p.next
  }
  // 保留 m 之前的左边部分结点
  const leftHead = p;

  // start 指针是区间位置的第一个结点
  let start = leftHead.next;
  // 让 pre 指向 start
  let pre = start;
  // cur 指向 start 的下一个结点 
  let cur = pre.next;
  // 局部反转 m 到 n
  for (let i = m; i < n; i++) {
    const tmp = cur.next;
    cur.next = pre;
    // start 往前走一个
    pre = cur;
    cur = tmp;
  }
  // 反转后处理前后两部分
  leftHead.next = pre;
  // 将区间反转后的最后一个结点 next 指向 cur
  start.next = cur
  return dummy.next;
}