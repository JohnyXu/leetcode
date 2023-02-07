/**
 * Definition for singly-linked list.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast !== null) {
    if (fast.val !== slow.val) {
      slow.next = fast;
      slow = slow?.next;
    }
    fast = fast.next;
  }
  slow.next = null;
  return head;
}
