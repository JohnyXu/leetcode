function findDifference(nums1: number[], nums2: number[]): number[][] {
  const sets2: Set<number> = new Set(nums2);
  let intersection: number[] = nums1.filter((num) => {
    return sets2.has(num);
  });
  const sets: Set<number> = new Set(intersection);
  const newNums1: number[] = nums1.filter((num) => {
    return !sets.has(num);
  });
  const newNums2: number[] = nums2.filter((num) => {
    return !sets.has(num);
  });
  return [Array.from(new Set(newNums1)), Array.from(new Set(newNums2))];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
