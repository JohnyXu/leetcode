function surfaceArea(grid: number[][]): number {
  let res: number = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (grid[i][j] > 0) {
        res += 2 + 4 * grid[i][j];
        if (i > 0) {
          res -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
        }
        if (j > 0) {
          res -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
        }
      }
    }
  }
  return res;
}

console.log(
  surfaceArea([
    [1, 2],
    [3, 4],
  ]),
);
console.log(
  surfaceArea([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);
console.log(
  surfaceArea([
    [2, 2, 2],
    [2, 1, 2],
    [2, 2, 2],
  ]),
);
