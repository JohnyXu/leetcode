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

function traverse(root: TreeNode | null): string[][] {
  if (!root) {
    return [];
  }

  let leftResult: string[][] = traverse(root.left);
  let rightResult: string[][] = traverse(root.right);

  let leftOrders: string[][] = [];
  if (leftResult.length > 0) {
    for (let i = 0; i < leftResult.length; i++) {
      leftOrders.push([root.val.toString()].concat(leftResult[i]));
    }
  }
  let rightOrders: string[][] = [];
  if (rightResult.length > 0) {
    for (let i = 0; i < rightResult.length; i++) {
      rightOrders.push([root.val.toString()].concat(rightResult[i]));
    }
  }

  if (!root.left && !root.right) {
    return [[root.val.toString()]];
  }
  return [...leftOrders, ...rightOrders];
}

function binaryTreePaths(root: TreeNode | null): string[] {
  let ans: string[][] = traverse(root);

  return ans.map((arr: string[]) => {
    return arr.join('->');
  });
}
