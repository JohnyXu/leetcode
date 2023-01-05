function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (m * n !== original.length) {
    return [];
  }

  let matrix: number[][] = [];
  for (let i = 0; i < m; i++) {
    let arr: number[] = [];
    for (let j = 0; j < n; j++) {
      const index = i * n + j;
      const cur: number = original[index];
      arr.push(cur);
    }
    matrix.push(arr);
  }
  return matrix;
}

console.log(construct2DArray([1, 2, 3, 4], 2, 2));
console.log(construct2DArray([1, 2, 3], 1, 3));
console.log(construct2DArray([1, 2], 1, 1));
console.log(construct2DArray([1, 1, 1, 1], 4, 1));
