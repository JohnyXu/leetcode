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

function buildTree(nums: number[]): TreeNode | null {
  if (nums.length <= 0) {
    return null;
  }
  let maximum: number = -1;
  let maximumIdx: number = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n > maximum) {
      maximum = n;
      maximumIdx = i;
    }
  }

  let left: number[] = nums.filter((v, idx) => idx < maximumIdx);
  let right: number[] = nums.filter((v, idx) => idx > maximumIdx);

  let root: TreeNode | null = new TreeNode();
  root.val = maximum;
  root.left = buildTree(left);
  root.right = buildTree(right);
  return root;
}

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return buildTree(nums);
}
