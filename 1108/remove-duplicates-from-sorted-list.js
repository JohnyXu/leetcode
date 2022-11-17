/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let prev = head;
  while (prev) {
    let next = prev.next;
    if (next && prev.val == next.val) {
      prev.next = next.next;
    } else {
      prev = prev.next;
    }
  }
  return head;
};
