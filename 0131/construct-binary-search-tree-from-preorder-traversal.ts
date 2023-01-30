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
function bstFromPreorder(preorder: number[]): TreeNode | null {
  if (preorder.length <= 0) {
    return null;
  }
  let root: TreeNode | null = new TreeNode(preorder[0], null, null);
  let leftArr: number[] = preorder.filter((val) => val < preorder[0]);
  let rightArr: number[] = preorder.filter((val) => val > preorder[0]);

  root.left = bstFromPreorder(leftArr);

  root.right = bstFromPreorder(rightArr);
  return root;
}
