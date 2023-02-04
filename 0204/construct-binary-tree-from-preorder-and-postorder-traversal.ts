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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
  let n = preorder.length;
  if (n === 0) {
    return null;
  }
  const root: TreeNode | null = new TreeNode(preorder[0]);
  if (n === 1) {
    return root;
  }
  for (let i = 0; i < n; i++) {
    if (postorder[i] === preorder[1]) {
      root.left = constructFromPrePost(
        preorder.filter((v, idx) => idx >= 1 && idx < 1 + i + 1),
        postorder.filter((v, idx) => {
          return idx >= 0 && idx < i + 1;
        }),
      );
      root.right = constructFromPrePost(
        preorder.filter((v, idx) => idx >= 1 + i + 1),
        postorder.filter((v, idx) => {
          return idx >= i + 1;
        }),
      );
      return root;
    }
  }
  return null;
}
