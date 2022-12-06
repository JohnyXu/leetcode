function largestTriangleArea(points: number[][]): number {
  let ans: number = 0;
  for (let i = 0; i < points.length; i++) {
    const [x1, y1]: number[] = points[i];
    for (let j = 0; j < points.length; j++) {
      const [x2, y2]: number[] = points[j];
      for (let k = 0; k < points.length; k++) {
        const [x3, y3]: number[] = points[k];
        const u1: number = x2 - x1;
        const v1: number = y2 - y1;
        const u2: number = x3 - x1;
        const v2: number = y3 - y1;
        const s: number = Math.abs(u1 * v2 - u2 * v1) / 2.0;
        ans = Math.max(ans, s);
      }
    }
  }
  return ans;
}

console.log(
  largestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ]),
);
console.log(
  largestTriangleArea([
    [1, 0],
    [0, 0],
    [0, 1],
  ]),
);
