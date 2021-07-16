// 链表中环的检测

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环

/**
 * 解题思路
 * 用一快一慢两个指针遍历链表，如果指针能够相逢，
 * 那么链表就有环
 */

/**
 * 解题步骤
 * 用一快一慢两个指针遍历链表，如果指针能够相逢，返回true
 * 遍历结束后，还没有相逢就返回false
 */


/**
 * @param {ListNode} head
 * @return {boolean}
 */
 const hasCycle = function(head) {
   let p1 = head
   let p2 = head
   while (p1 && p2 && p2.next ) {
     p1 = p1.next;
     p2 = p2.next.next
     if (p1 === p2) {
       return true
     }
   }
   return false
 };

