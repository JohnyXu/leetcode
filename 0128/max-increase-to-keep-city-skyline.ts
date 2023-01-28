function maxIncreaseKeepingSkyline(grid: number[][]): number {
  let rows: number[] = Array.from<number>({ length: grid.length }).fill(0);
  let cols: number[] = Array.from<number>({ length: grid.length }).fill(0);

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      rows[i] = Math.max(rows[i], grid[i][j]);
    }
    for (let j = 0; j < row.length; j++) {
      cols[i] = Math.max(cols[i], grid[j][i]);
    }
  }

  let sum: number = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      sum += Math.min(rows[i], cols[j]) - grid[i][j];
    }
  }
  return sum;
}
