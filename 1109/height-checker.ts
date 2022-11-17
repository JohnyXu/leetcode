function heightChecker(heights: number[]): number {
  let count: number = 0;
  heights
    .map((height) => height)
    .sort((a, b) => a - b)
    .forEach((height, index) => {
      if (height !== heights[index]) {
        count += 1;
      }
    });
  return count;
}
