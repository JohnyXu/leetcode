/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const newMatrix: number[][] = [];

  for (let x = 0; x < matrix.length; x++) {
    let row: number[] = [];
    for (let y = matrix.length - 1; y >= 0; y--) {
      row.push(matrix[y][x]);
    }
    newMatrix.push(row);
  }

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      matrix[y][x] = newMatrix[y][x];
    }
  }
}
