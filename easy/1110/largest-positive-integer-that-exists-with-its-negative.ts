function findMaxK(nums: number[]): number {
  const sets: Set<number> = new Set<number>(nums);
  let max: number = -1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > max && sets.has(-num)) {
      max = num;
    }
  }
  return max;
}

console.log(findMaxK([-1, 2, -3, 3]));
console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
console.log(findMaxK([-10, 8, 6, 7, -2, -3]));
