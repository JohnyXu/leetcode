/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      const accept = i == j || i + j == mat.length - 1;
      if (accept) {
        sum = sum + mat[i][j];
      }
    }
  }
  return sum;
};
