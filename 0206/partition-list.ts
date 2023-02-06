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
function partition(head: ListNode | null, x: number): ListNode | null {
  let dummy1: ListNode | null = new ListNode(-1);
  let dummy2: ListNode | null = new ListNode(-1);

  let p1: ListNode | null = dummy1;
  let p2: ListNode | null = dummy2;
  let p: ListNode | null = head;
  while (p) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }

    let temp: ListNode | null = p.next;
    p.next = null;
    p = temp;
  }

  p1.next = dummy2.next;
  return dummy1.next;
}
