function transpose(matrix: number[][]): number[][] {
  const newMat: number[][] = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMat[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      const cell = matrix[j][i];
      newMat[i].push(cell);
    }
  }
  return newMat;
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ]),
);
