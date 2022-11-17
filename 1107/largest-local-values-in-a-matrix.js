/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  let newMatrix = [];
  for (let i = 0; i < grid.length - 2; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < grid[i].length - 2; j++) {
      let max = 0;
      for (let k = 0; k < 3; k++) {
        for (let m = 0; m < 3; m++) {
          if (grid[i + k][j + m] > max) {
            max = grid[i + k][j + m];
          }
        }
      }
      newMatrix[i][j] = max;
    }
  }
  return newMatrix;
};
