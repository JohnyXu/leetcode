function countOdds(low: number, high: number): number {
  let count: number = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2) {
      count += 1;
    }
  }
  return count;
}
