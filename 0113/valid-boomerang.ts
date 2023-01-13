function isBoomerang(points: number[][]): boolean {
  let xDiff: number = points[1][0] - points[0][0];
  let yDiff: number = points[1][1] - points[0][1];

  let xDiff1: number = points[2][0] - points[0][0];
  let yDiff1: number = points[2][1] - points[0][1];

  let xDiff2: number = points[2][0] - points[1][0];
  let yDiff2: number = points[2][1] - points[1][1];

  if (xDiff * yDiff1 !== xDiff1 * yDiff && xDiff * yDiff2 !== xDiff2 * yDiff) {
    return true;
  }
  return false;
}

console.log(
  isBoomerang([
    [1, 1],
    [2, 3],
    [3, 2],
  ]),
);
console.log(
  isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ]),
);
