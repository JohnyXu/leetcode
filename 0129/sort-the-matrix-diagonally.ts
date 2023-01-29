function diagonalSort(mat: number[][]): number[][] {
  let m: number = mat.length;
  let n: number = mat[0].length;
  for (let i = 0; i < Math.min(m, n) - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      for (let k = 0; k < n - 1; k++) {
        if (mat[j][k] > mat[j + 1][k + 1]) {
          [mat[j][k], mat[j + 1][k + 1]] = [mat[j + 1][k + 1], mat[j][k]];
        }
      }
    }
  }
  return mat;
}
