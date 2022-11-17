// front-back projection area on xz = sum(max value for every col)
// right-left projection area on yz = sum(max value for every row)
// top-down projection area on xy = sum(1 for every v > 0)

function projectionArea(grid: number[][]): number {
  const n = grid.length;
  let res = grid.reduce((r, v) => r + v.reduce((r, v) => r + (v === 0 ? 0 : 1), 0), 0);
  for (let i = 0; i < n; i++) {
    let xMax = 0;
    let yMax = 0;
    for (let j = 0; j < n; j++) {
      xMax = Math.max(xMax, grid[i][j]);
      yMax = Math.max(yMax, grid[j][i]);
    }
    res += xMax + yMax;
  }
  return res;
}

console.log(
  projectionArea([
    [1, 2],
    [3, 4],
  ]),
);

console.log(projectionArea([[2]]));

console.log(
  projectionArea([
    [1, 0],
    [0, 2],
  ]),
);
