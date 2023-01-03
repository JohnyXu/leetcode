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
function inorderTraversal(root: TreeNode | null): number[] {
  // function iterator(res, node: TreeNode | null) {
  //   if (!node) {
  //     return;
  //   }
  //   iterator(res, node.left);
  //   res.push(node.val);
  //   iterator(res, node.right);
  // }
  // let res: number[] = [];
  // iterator(res, root);
  // return res;

  let res: number[] = [];
  let stk: TreeNode[] = [];

  while (root || stk.length > 0) {
    if (root) {
      stk.push(root);
      root = root.left;
    } else {
      root = stk.pop() as TreeNode;
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
}
