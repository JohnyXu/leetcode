function numSpecial(mat: number[][]): number {
  let count: number = 0;
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell === 1) {
        let pass: boolean = true;
        for (let k = 0; k < row.length; k++) {
          if (row[k] !== 0 && k !== j) {
            pass = false;
            break;
          }
        }

        for (let m = 0; m < mat.length; m++) {
          if (mat[m][j] !== 0 && m !== i) {
            pass = false;
            break;
          }
        }
        if (pass) {
          count += 1;
        }
      }
    }
  }
  return count;
}

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
  ]),
);
console.log(
  numSpecial([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
);
