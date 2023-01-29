// REVIEW
function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  let mat: number[][] = [];
  for (let i = 0; i < rowSum.length; i++) {
    let arr: number[] = [];
    for (let j = 0; j < colSum.length; j++) {
      arr.push(0);
    }
    mat.push(arr);
  }

  for (let i = 0; i < rowSum.length; i++) {
    for (let j = 0; j < colSum.length; j++) {
      const val: number = Math.min(rowSum[i], colSum[j]);
      mat[i][j] = val;
      rowSum[i] -= val;
      colSum[j] -= val;
    }
  }
  return mat;
}
