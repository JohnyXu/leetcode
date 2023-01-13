function checkStraightLine(coordinates: number[][]): boolean {
  let xDiff: number = coordinates[1][0] - coordinates[0][0];
  let yDiff: number = coordinates[1][1] - coordinates[0][1];

  for (let i = 2; i < coordinates.length; i++) {
    let xDiff1: number = coordinates[i][0] - coordinates[0][0];
    let yDiff1: number = coordinates[i][1] - coordinates[0][1];
    if (xDiff * yDiff1 !== xDiff1 * yDiff) {
      return false;
    }
  }
  return true;
}

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ]),
);
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ]),
);
