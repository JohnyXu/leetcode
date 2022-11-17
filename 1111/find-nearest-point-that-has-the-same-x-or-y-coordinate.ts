function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let min: number = 10001;
  let minDistance: number = Infinity;
  for (let i = points.length - 1; i >= 0; i--) {
    const row: number[] = points[i];
    if (row[0] === x || row[1] === y) {
      const dist: number = Math.abs(row[0] - x) + Math.abs(row[1] - y);
      if (dist < minDistance || (dist === minDistance && min > i)) {
        minDistance = dist;
        min = i;
      }
    }
  }

  return min > points.length ? -1 : min;
}

console.log(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ]),
);
console.log(nearestValidPoint(3, 4, [[3, 4]]));
console.log(nearestValidPoint(3, 4, [[2, 3]]));
