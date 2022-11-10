function generate(numRows: number): number[][] {
  let matrix: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    matrix[i] = [];
    for (let j = 0; j < numRows; j++) {
      matrix[i][j] = 0;
    }
  }
  matrix[0][0] = 1;
  if (numRows == 1) {
    return matrix;
  }
  for (let i = 1; i < numRows; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        matrix[i][j] = 1;
      } else {
        matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
      }
    }
  }
  return matrix.map((arr) => {
    return arr.filter((num) => num > 0);
  });
}

console.log(generate(3));
console.log(generate(5));
