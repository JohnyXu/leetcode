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

let successor: ListNode | null = null;
function reverseN(head: ListNode | null, n: number): ListNode | null {
  if (n === 1) {
    if (head) successor = head?.next;
    return head;
  }
  let last: ListNode | null = reverseN(head?.next, n - 1);

  if (head && head.next) {
    head.next.next = head;
  }
  if (head) {
    head.next = successor;
  }
  return last;
}
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (left === 1) {
    return reverseN(head, right);
  }
  if (head) {
    head.next = reverseBetween(head.next, left - 1, right - 1);
  }
  return head;
}
