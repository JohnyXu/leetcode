function matrixScore(grid: number[][]): number {
  let m: number = grid.length;
  let n: number = grid[0].length;
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < n; j++) {
        grid[i][j] ^= 1;
      }
    }
  }
  let ans: number = 0;
  for (let j = 0; j < n; j++) {
    let cnt: number = 0;
    for (let i = 0; i < m; i++) {
      cnt += grid[i][j];
    }
    ans += Math.max(cnt, m - cnt) * (1 << (n - 1 - j));
  }
  return ans;
}
