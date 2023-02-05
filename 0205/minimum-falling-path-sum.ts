// Review
function minFallingPathSum(matrix: number[][]): number {
  let n = matrix.length;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let mi = matrix[i - 1][j];
      if (j > 0) {
        mi = Math.min(mi, matrix[i - 1][j - 1]);
      }
      if (j < n - 1) {
        mi = Math.min(mi, matrix[i - 1][j + 1]);
      }
      matrix[i][j] += mi;
    }
  }
  let minimum: number = matrix[n - 1][0];
  for (let j = 1; j < n; j++) {
    minimum = Math.min(minimum, matrix[n - 1][j]);
  }
  return minimum;
}

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ]),
);
