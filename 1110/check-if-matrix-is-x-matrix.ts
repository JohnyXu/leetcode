function checkXMatrix(grid: number[][]): boolean {
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (i === j && grid[i][j] === 0) {
        return false;
      } else if (i + j === grid.length - 1 && grid[i][j] === 0) {
        return false;
      } else if (i !== j && i + j !== grid.length - 1 && grid[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  checkXMatrix([
    [2, 0, 0, 1],
    [0, 3, 1, 0],
    [0, 5, 2, 0],
    [4, 0, 0, 2],
  ]),
);
console.log(
  checkXMatrix([
    [5, 7, 0],
    [0, 3, 1],
    [0, 5, 0],
  ]),
);
