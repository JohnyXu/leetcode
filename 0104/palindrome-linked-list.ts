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

function buildLinkList(nums: number[]) {
  let head: ListNode | null = new ListNode(nums[0]);

  let current: ListNode | null = head;
  for (let i = 1; i < nums.length; i++) {
    let node: ListNode | null = new ListNode(nums[i]);
    current.next = node;
    current = node;
  }
  return head;
}

function printLink(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head;
  let nums: number[] = [];
  while (current) {
    nums.push(current.val);
    current = current.next;
  }
  console.log(nums.join(','));
  return head;
}

function reverseLink(head: ListNode | null): ListNode | null {
  let node: ListNode | null = null;
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  while (current) {
    node = new ListNode(current.val);
    node.next = prev;
    prev = node;
    current = current.next;
  }
  return node;
}

function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let reverse = reverseLink(head);
  let headPointer: ListNode | null = head;
  let reversePointer: ListNode | null = reverse;

  while (headPointer && reversePointer) {
    if (headPointer.val !== reversePointer.val) {
      return false;
    }

    headPointer = headPointer.next;
    reversePointer = reversePointer.next;
    if (headPointer && !reversePointer) {
      return false;
    }
    if (reversePointer && !headPointer) {
      return false;
    }
  }
  return true;
}

function check(nums: number[]) {
  let head: ListNode | null = buildLinkList(nums);
  console.log(isPalindrome(head));
}

check([1, 2, 2, 1]);
check([1, 2]);
