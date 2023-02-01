function maxSum(grid: number[][]): number {
  let m = grid.length;
  let n = grid[0].length;
  let dirs = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 1],
    [2, 2],
  ];

  let maximum: number = -1;
  for (let i = 0; i <= m - 3; i++) {
    for (let j = 0; j <= n - 3; j++) {
      let sum = 0;
      for (let k = 0; k < dirs.length; k++) {
        const [x, y] = dirs[k];
        sum += grid[i + x][j + y];
      }
      maximum = Math.max(maximum, sum);
    }
  }
  return maximum;
}
