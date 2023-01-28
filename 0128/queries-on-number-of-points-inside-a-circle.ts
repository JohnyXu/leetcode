function countPoints(points: number[][], queries: number[][]): number[] {
  let ans: number[] = [];
  for (let i = 0; i < queries.length; i++) {
    const [x2, y2, r] = queries[i];
    let count: number = 0;
    for (let j = 0; j < points.length; j++) {
      const [x, y] = points[j];
      if ((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y) <= r * r) {
        count++;
      }
    }
    ans.push(count);
  }
  return ans;
}
