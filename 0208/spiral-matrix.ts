function spiralOrder(matrix: number[][]): number[] {
  let m = matrix.length;
  let n = matrix[0].length;
  let upper = 0;
  let lower = m - 1;
  let left = 0;
  let right = n - 1;
  let res: number[] = [];
  while (res.length < m * n) {
    if (upper <= lower) {
      for (let j = left; j <= right; j++) {
        res.push(matrix[upper][j]);
      }
      upper++;
    }
    if (left <= right) {
      for (let i = upper; i <= lower; i++) {
        res.push(matrix[i][right]);
      }
      right--;
    }
    if (upper <= lower) {
      for (let j = right; j >= left; j--) {
        res.push(matrix[lower][j]);
      }
      lower--;
    }
    if (left <= right) {
      for (let i = lower; i >= upper; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }
  return res;
}
