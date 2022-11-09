function countNegatives(grid: number[][]): number {
  const m: number = grid.length;
  const n: number = grid[0].length;

  let count = 0;
  for (let i = m - 1; i >= 0; i--) {
    if (grid[i][n - 1] > 0) {
      break;
    }
    for (let j = n - 1; j >= 0; j--) {
      const negative = grid[i][j] < 0;
      if (negative) {
        count = count + 1;
      } else {
        break;
      }
    }
  }
  return count;
}
