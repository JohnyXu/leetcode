/**
 * Definition for a binary tree node.
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function isSymmetric(root: TreeNode | null): boolean {
  // function dfsL(node: TreeNode | null, nums: (number | null)[]) {
  //   if (!node) {
  //     nums.push(null);
  //     return;
  //   }
  //   nums.push(node?.val);
  //   dfsL(node.left, nums);
  //   dfsL(node.right, nums);
  // }
  // function dfsR(node: TreeNode | null, nums: (number | null)[]) {
  //   if (!node) {
  //     nums.push(null);
  //     return;
  //   }
  //   nums.push(node?.val);
  //   dfsR(node.right, nums);
  //   dfsR(node.left, nums);
  // }
  // if (!root) {
  //   return true;
  // }
  // if (!root.left && !root.right) {
  //   return true;
  // }
  // let nums1: (number | null)[] = [];
  // let nums2: (number | null)[] = [];

  // dfsL(root.left, nums1);
  // dfsR(root.right, nums2);

  // for (const key in nums1) {
  //   if (nums1[key] !== nums2[key]) {
  //     return false;
  //   }
  // }
  // return true;

  if (!root) {
    return true;
  }
  if (!root.left && !root.right) {
    return true;
  }
  let current: TreeNode | null = root.left;
  let stack1: (TreeNode | null)[] = [];
  let nums1: (number | null)[] = [];
  while (current || stack1.length > 0) {
    if (current) {
      nums1.push(current.val);
      stack1.push(current.right);
      stack1.push(current.left);
    } else {
      current = stack1.pop() as TreeNode;
    }
  }

  // let nums2: (number | null)[] = [];
}
