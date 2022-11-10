function intersection(nums1: number[], nums2: number[]): number[] {
  const s: Set<number> = new Set();
  for (const num of nums1) {
    s.add(num);
  }
  let res: Set<number> = new Set();
  for (const num of nums2) {
    if (s.has(num)) {
      res.add(num);
    }
  }
  return [...res];
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([6, 6, 4, 4, 0, 0, 8, 1, 2], [6]));
