function maxWidthOfVerticalArea(points: number[][]): number {
  let maximum: number = -1;
  points.sort((a, b) => a[0] - b[0]);
  let prev: number[] = points[0];
  for (let i = 1; i < points.length; i++) {
    const cur = points[i];
    const width = cur[0] - prev[0];
    if (width > maximum) {
      maximum = width;
    }
    prev = cur;
  }
  return maximum;
}
