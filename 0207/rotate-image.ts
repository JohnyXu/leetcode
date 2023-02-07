/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (const row of matrix) {
    reverse(row);
  }
}

function reverse(arr: number[]) {
  let i = 0;
  let j = arr.length - 1;
  while (j > i) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i += 1;
    j--;
  }
}
