function luckyNumbers(matrix: number[][]): number[] {
  let cols: number[] = Array.from({ length: matrix[0].length }, (k, v) => 0);
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > cols[i]) {
        cols[i] = matrix[j][i];
      }
    }
  }

  let res: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    let index = 0;
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][index] > matrix[i][j]) {
        index = j;
      }
    }
    if (matrix[i][index] == cols[index]) {
      res.push(cols[index]);
    }
  }
  return res;
}

// console.log(
//   luckyNumbers([
//     [3, 7, 8],
//     [9, 11, 13],
//     [15, 16, 17],
//   ]),
// );
console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ]),
);
