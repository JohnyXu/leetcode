function onesMinusZeros(grid: number[][]): number[][] {
  let mat: number[][] = [];
  for (let i = 0; i < grid.length; i++) {
    let arr: number[] = [];
    for (let j = 0; j < grid[0].length; j++) {
      arr.push(0);
    }
    mat.push(arr);
  }
  let row1: number[] = Array.from<number>({ length: grid.length }).fill(0);
  let row0: number[] = Array.from<number>({ length: grid.length }).fill(0);
  let col1: number[] = Array.from<number>({ length: grid[0].length }).fill(0);
  let col0: number[] = Array.from<number>({ length: grid[0].length }).fill(0);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      row1[i] += grid[i][j] === 1 ? 1 : 0;
      row0[i] += grid[i][j] === 0 ? 1 : 0;
    }
  }
  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      col1[i] += grid[j][i] === 1 ? 1 : 0;
      col0[i] += grid[j][i] === 0 ? 1 : 0;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      mat[i][j] = row1[i] + col1[j] - row0[i] - col0[j];
    }
  }
  return mat;
}
