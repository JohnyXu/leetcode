function getRow(rowIndex: number): number[] {
  let matrix: number[][] = [];
  for (let i = 0; i <= rowIndex; i++) {
    let row: number[] = [];

    row[0] = 1;
    row[i] = 1;
    if (i >= 2) {
      for (let j = 1; j < i; j++) {
        row[j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
      }
    }
    matrix.push(row);
  }
  return matrix[rowIndex];
}

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(4));
console.log(getRow(5));
