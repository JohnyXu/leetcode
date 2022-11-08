/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let matrix = [];
  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  for (let i = 0; i < indices.length; i++) {
    const [row, col] = indices[i];
    for (let j = 0; j < n; j++) {
      matrix[row][j] += 1;
    }
    for (let k = 0; k < m; k++) {
      matrix[k][col] += 1;
    }
  }

  return matrix.reduce((sum, row) => {
    return (
      sum +
      row.reduce((sum2, num) => {
        return sum2 + (num % 2);
      }, 0)
    );
  }, 0);
};
