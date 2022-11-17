function shiftGrid(grid: number[][], k: number): number[][] {
  const nums: number[] = grid.flat();

  let part1: number[] = [];
  let part2: number[] = [];

  const valid: number = k % nums.length;
  for (let i = 0; i < nums.length - valid; i++) {
    part1.push(nums[i]);
  }
  for (let j = nums.length - valid; j < nums.length; j++) {
    part2.push(nums[j]);
  }

  const newNums: number[] = part2.concat(part1);
  let newMatrix: number[][] = [];
  for (let i = 0; i < grid.length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < grid[i].length; j++) {
      newMatrix[i][j] = newNums[i * grid[i].length + j];
    }
  }
  return newMatrix;
}

// console.log(
//   shiftGrid(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     1,
//   ),
// );
// console.log(
//   shiftGrid(
//     [
//       [3, 8, 1, 9],
//       [19, 7, 2, 5],
//       [4, 6, 11, 10],
//       [12, 0, 21, 13],
//     ],
//     4,
//   ),
// );
// console.log(shiftGrid([[1]], 100));
console.log(shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23));
