function maxAreaOfIsland(grid: number[][]): number {
  let m = grid.length;
  let n = grid[0].length;

  function dfs(row: number, col: number) {
    grid[row][col] = 0;

    let dirs: number[] = [-1, 0, 1, 0, -1];

    let ans: number = 1;
    for (let i = 0; i < 4; i++) {
      let x: number = row + dirs[i];
      let y: number = col + dirs[i + 1];
      if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
        ans += dfs(x, y);
      }
    }
    return ans;
  }

  let ans: number = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        ans = Math.max(ans, dfs(i, j));
      }
    }
  }
  return ans;
}
