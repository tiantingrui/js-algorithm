// 合并两个有序的链表

const mergeTwoLists = (l1, l2) => {
  const head = new ListNode()
  
  let cur = head 

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }

  // 处理链表不等长的情况
  cur.next = l1 !== null ? l1 : l2
  // 返回 起始结点 
  return head.next
}