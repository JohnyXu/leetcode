function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (r * c !== mat.length * mat[0].length) {
    return mat;
  }
  let arr: number[] = [];
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      arr.push(cell);
    }
  }

  const newMat: number[][] = [];
  for (let i = 0; i < r; i++) {
    newMat[i] = [];
    for (let j = 0; j < c; j++) {
      newMat[i][j] = arr[i * c + j];
    }
  }
  return newMat;
}

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4,
  ),
);
console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4,
  ),
);
