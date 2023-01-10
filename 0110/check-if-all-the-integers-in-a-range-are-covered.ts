function isCovered(ranges: number[][], left: number, right: number): boolean {
  let sets: Set<number> = new Set<number>();
  for (let i = left; i <= right; i++) {
    sets.add(i);
  }

  for (let i = 0; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    for (let j = start; j <= end; j++) {
      if (sets.has(j)) {
        sets.delete(j);
      }
    }
  }
  return sets.size === 0;
}

console.log(
  isCovered(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    5,
  ),
);
console.log(
  isCovered(
    [
      [1, 10],
      [10, 20],
    ],
    21,
    21,
  ),
);
