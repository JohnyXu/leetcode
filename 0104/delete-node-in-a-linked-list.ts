/**
 * Definition for singly-linked list.
 */

/**
 Do not return anything, modify it in-place instead.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function deleteNode(node: ListNode | null): void {
  if (!node) {
    return;
  }

  let next: ListNode | null = node?.next;
  let nextNext: ListNode | null = null;
  if (next) {
    node.val = next.val;
    nextNext = next.next;
  }
  if (node) {
    node.next = nextNext;
  }
}
