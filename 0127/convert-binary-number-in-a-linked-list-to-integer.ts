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
function getDecimalValue(head: ListNode | null): number {
  let num: number = 0;
  while (head) {
    if (num > 0) {
      num *= 2;
    }
    if (head.val) {
      num += 1;
    }
    head = head.next;
  }
  return num;
}
