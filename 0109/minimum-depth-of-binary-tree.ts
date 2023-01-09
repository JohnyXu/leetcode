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
function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  let leftHeight: number = minDepth(root.left);
  let rightHeight: number = minDepth(root.right);

  if (leftHeight > 0) {
    leftHeight = leftHeight + 1;
  }
  if (rightHeight > 0) {
    rightHeight = rightHeight + 1;
  }
  if (leftHeight && rightHeight) {
    return Math.min(leftHeight, rightHeight);
  }
  return leftHeight > rightHeight ? leftHeight : rightHeight;
}
