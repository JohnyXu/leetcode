function generateMatrix(n: number): number[][] {
  let matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  let upper = 0;
  let lower = n - 1;
  let left = 0;
  let right = n - 1;
  let num = 1;
  while (num <= n * n) {
    if (upper <= lower) {
      for (let j = left; j <= right; j++) {
        matrix[upper][j] = num++;
      }
      upper++;
    }
    if (left <= right) {
      for (let i = upper; i <= lower; i++) {
        matrix[i][right] = num++;
      }
      right--;
    }
    if (upper <= lower) {
      for (let j = right; j >= left; j--) {
        matrix[lower][j] = num++;
      }
      lower--;
    }
    if (left <= right) {
      for (let i = lower; i >= upper; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }
  return matrix;
}
