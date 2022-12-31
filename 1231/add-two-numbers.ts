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

type ListNodeType = ListNode | null;

function addTwoNumbers(l1: ListNodeType, l2: ListNodeType): ListNodeType {
  // all of them are empty
  if (l1 === null || l2 === null) {
    return null;
  }
  // check l1 emapty, return l2
  if (!l1) {
    return l2;
  }
  // check l2 empty, return l1
  if (!l2) {
    return l1;
  }
  // all of them are not empty, add the pointer one by one, and move to next
  // we need to consider the carry number
  let carry: number = 0;
  let head: ListNode | null = null;
  let pointer: ListNode | null = null;

  while (l1 !== null || l2 !== null) {
    const l1Value: number = l1 ? l1.val : 0;
    const l2Value: number = l2 ? l2.val : 0;

    const sum = l1Value + l2Value + carry;
    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    const num = sum % 10;
    const newNode = new ListNode(num, null);
    if (!head) {
      head = newNode;
      pointer = head;
    } else if (pointer) {
      pointer.next = newNode;
      pointer = newNode;
    }

    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  if (carry > 0 && pointer) {
    const newNode = new ListNode(carry, null);
    pointer.next = newNode;
    pointer = newNode;
  }

  return head;
}

function makeList(nums: number[]): ListNodeType {
  if (nums.length === 0) {
    return null;
  }
  const head = new ListNode(nums[0]);
  let pointer = head;
  for (let i = 1; i < nums.length; i++) {
    pointer.next = new ListNode(nums[i]);
    pointer = pointer.next;
  }
  return head;
}

function printList(list: ListNodeType): void {
  if (!list) {
    return;
  }
  while (list) {
    console.log(list.val);
    list = list.next;
  }
}

const l1: ListNodeType = makeList([2, 4, 3]);
const l2: ListNodeType = makeList([5, 6, 4]);
// printList(l1);
// printList(l2);
const result: ListNodeType = addTwoNumbers(l1, l2);
printList(result);
