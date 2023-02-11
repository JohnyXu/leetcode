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

let ans: number = 0;

function dfs(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let leftHeight: number = diameterOfBinaryTree(root?.left);
  let rightHeight: number = diameterOfBinaryTree(root?.right);
  ans = Math.max(ans, leftHeight + rightHeight);
  return 1 + Math.max(leftHeight, rightHeight);
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  ans = 0;
  dfs(root);
  return ans;
}
