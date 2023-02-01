/**
 * Definition for singly-linked list.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
  let mat: number[][] = [];
  for (let i = 0; i < m; i++) {
    mat[i] = [];
    for (let j = 0; j < n; j++) {
      mat[i][j] = -1;
    }
  }
  let cur: ListNode | null = head;
  let i: number = 0;
  let j: number = 0;
  let p: number = 0;
  let dirs: number[][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (cur !== null) {
    mat[i][j] = cur.val;
    cur = cur.next;
    if (!cur) {
      break;
    }
    while (true) {
      let x: number = i + dirs[p][0];
      let y: number = j + dirs[p][1];
      if (x < 0 || y < 0 || x >= m || y >= n || mat[x][y] >= 0) {
        p = (p + 1) % 4;
      } else {
        i = x;
        j = y;
        break;
      }
    }
  }
  return mat;
}
