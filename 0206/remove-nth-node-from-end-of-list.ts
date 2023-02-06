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

function findFromEnd(head: ListNode | null, k: number) {
  let p: ListNode | null = head;
  for (let i = 0; i < k; i++) {
    if (p) {
      p = p?.next;
    }
  }

  let p2: ListNode | null = head;
  while (p != null) {
    p = p.next;
    if (p2) {
      p2 = p2?.next;
    }
  }
  return p2;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy: ListNode | null = new ListNode(-1);
  dummy.next = head;
  let del: ListNode | null = findFromEnd(dummy, n + 1);
  if (del && del.next) {
    del.next = del?.next.next;
  }
  return dummy.next;
}
