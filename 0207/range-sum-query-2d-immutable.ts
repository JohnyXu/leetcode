class NumMatrix {
  preSum: number[][];
  constructor(matrix: number[][]) {
    let m = matrix.length;
    let n = matrix[0].length;
    let preSum: number[][] = [];
    for (let i = 0; i <= m; i++) {
      preSum[i] = [];
      for (let j = 0; j <= n; j++) {
        preSum[i][j] = 0;
      }
    }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        preSum[i][j] =
          preSum[i - 1][j] + preSum[i][j - 1] + matrix[i - 1][j - 1] - preSum[i - 1][j - 1];
      }
    }
    this.preSum = preSum;
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.preSum[row2 + 1][col2 + 1] -
      this.preSum[row1][col2 + 1] -
      this.preSum[row2 + 1][col1] +
      this.preSum[row1][col1]
    );
  }
}
