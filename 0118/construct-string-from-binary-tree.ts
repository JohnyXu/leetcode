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
function tree2str(root: TreeNode | null): string {
  if (!root) {
    return '';
  }

  if (!root.left && !root.right) {
    return root.val.toString();
  }

  let left: string = '(' + tree2str(root.left) + ')';
  let right: string = root.right ? '(' + tree2str(root.right) + ')' : '';
  return root.val.toString() + left + right;
}
