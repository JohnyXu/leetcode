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
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let p1: ListNode | null = list1;
  let p2: ListNode | null = list2;
  let dummy: ListNode | null = new ListNode(-1);
  let p: ListNode | null = dummy;

  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p?.next;
  }
  if (p1 !== null) {
    p.next = p1;
  }
  if (p2 !== null) {
    p.next = p2;
  }
  return dummy.next;
}
