function equalPairs(grid: number[][]): number {
  let n = grid.length;
  let count = 0;
  let g: number[][] = [];
  for (let i = 0; i < n; i++) {
    g[i] = [];
    for (let j = 0; j < n; j++) {
      g[i][j] = grid[j][i];
    }
  }
  for (const row of grid) {
    for (const col of g) {
      let ok: number = 1;
      for (let i = 0; i < n; i++) {
        if (row[i] !== col[i]) {
          ok = 0;
          break;
        }
      }
      count += ok;
    }
  }
  return count;
}
