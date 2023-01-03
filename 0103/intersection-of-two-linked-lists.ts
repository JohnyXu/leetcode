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

// 1->2->3
// 1<-2<-3
function reverseLinklist(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let next: ListNode | null = null;
  let current: ListNode | null = head;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA && !headB) {
    return null;
  }
  if (headB && !headA) {
    return null;
  }
  if (!headA && !headB) {
    return null;
  }

  let current: ListNode | null = headA;

  let sets: Set<ListNode | null> = new Set<ListNode | null>();
  let node: ListNode | null = headB;
  while (node) {
    sets.add(node);
    node = node.next;
  }

  while (current) {
    if (sets.has(current)) {
      break;
    }
    current = current.next;
  }

  return current;
}

function printList(head: ListNode | null) {
  if (!head) {
    console.log('empty link');
    return;
  }
  let current: ListNode | null = head;
  let ans: number[] = [];
  while (current) {
    ans.push(current.val);
    current = current.next;
  }
  console.log(ans.join(','));
}

function buildLinklist(nums: number[]): ListNode | null {
  if (!nums || nums.length <= 0) {
    return null;
  }
  const head: ListNode | null = new ListNode(nums[0]);
  let current: ListNode | null = head;
  for (let i = 1; i < nums.length; i++) {
    const node = new ListNode(nums[i]);
    current.next = node;
    current = node;
  }
  return head;
}

const link1: ListNode | null = buildLinklist([4, 1, 8, 4, 5]);
const link2: ListNode | null = buildLinklist([5, 6, 1, 8, 4, 5]);
const interLink: ListNode | null = getIntersectionNode(link1, link2);

printList(interLink);
