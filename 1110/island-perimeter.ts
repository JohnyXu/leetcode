function islandPerimeter(grid: number[][]): number {
  let count: number = grid.reduce((sum, arr) => {
    return (
      sum +
      arr.reduce((sum2, num) => {
        return sum2 + (num === 1 ? 4 : 0);
      }, 0)
    );
  }, 0);

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell == 1) {
        //top
        if (i > 0 && grid[i - 1][j] === 1) {
          count -= 1;
        }

        //left
        if (j > 0 && grid[i][j - 1] === 1) {
          count -= 1;
        }

        //right
        if (j < row.length - 1 && grid[i][j + 1] === 1) {
          count -= 1;
        }

        //bottom
        if (i < grid.length - 1 && grid[i + 1][j] === 1) {
          count -= 1;
        }
      }
    }
  }
  return count;
}

// console.log(
//   islandPerimeter([
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0],
//   ]),
// );

// console.log(islandPerimeter([[1]]));
// console.log(islandPerimeter([[1, 0]]));
