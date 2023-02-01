function countSquares(matrix: number[][]): number {
  let m = matrix.length;
  let n = matrix[0].length;
  let f: number[][] = [];
  for (let i = 0; i < m; i++) {
    f[i] = [];
    for (let j = 0; j < n; j++) {
      f[i][j] = 0;
    }
  }
  let ans: number = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        continue;
      }
      if (i === 0 || j === 0) {
        f[i][j] = 1;
      } else {
        f[i][j] = Math.min(f[i - 1][j - 1], Math.min(f[i - 1][j], f[i][j - 1])) + 1;
      }
      ans += f[i][j];
    }
  }
  return ans;
}
