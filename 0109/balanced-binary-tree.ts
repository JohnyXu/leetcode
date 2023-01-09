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

function getHeight(root: TreeNode | null, mapping: Map<TreeNode, number>) {
  if (!root) {
    return 0;
  }

  if (mapping.get(root)) {
    return mapping.get(root) as number;
  }

  let height: number = Math.max(
    getHeight(root.left, mapping) + 1,
    getHeight(root.right, mapping) + 1,
  );
  mapping.set(root, height);
  return height;
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  let mapping: Map<TreeNode, number> = new Map<TreeNode, number>();
  let leftHeight: number = getHeight(root.left, mapping);
  let rightHeight: number = getHeight(root.right, mapping);
  let isRootBalanced: boolean =
    leftHeight + 1 === rightHeight || rightHeight + 1 === leftHeight || leftHeight === rightHeight;

  if (!isRootBalanced) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}
