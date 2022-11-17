function allCellsDistOrder(
  rows: number,
  cols: number,
  rCenter: number,
  cCenter: number,
): number[][] {
  let matrix: number[][] = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      matrix.push([i, j]);
    }
  }

  matrix.sort((arr1: number[], arr2: number[]) => {
    const weight1: number = Math.abs(arr1[0] - rCenter) + Math.abs(arr1[1] - cCenter);
    const weight2: number = Math.abs(arr2[0] - rCenter) + Math.abs(arr2[1] - cCenter);
    return weight1 - weight2;
  });

  return matrix;
}

console.log(allCellsDistOrder(1, 2, 0, 0));
console.log(allCellsDistOrder(2, 2, 0, 1));
console.log(allCellsDistOrder(2, 3, 1, 2));
