function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
  const part1: number[] = nums.filter((num) => num > 0);
  const part2: number[] = nums.filter((num) => num === 0);
  return part1.concat(part2);
}

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
console.log(applyOperations([0, 1]));
