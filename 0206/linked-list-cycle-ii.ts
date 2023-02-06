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
function detectCycle(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    if (slow) {
      slow = slow?.next;
    }
    if (fast === slow) break;
  }
  if (fast === null || fast.next === null) {
    return null;
  }
  slow = head;
  while (slow !== fast) {
    if (fast) {
      fast = fast?.next;
    }
    if (slow) {
      slow = slow?.next;
    }
  }
  return slow;
}
