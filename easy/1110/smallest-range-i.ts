function smallestRangeI(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  if (k === 0) {
    return nums[nums.length - 1] - nums[0];
  }
  const score: number = nums[nums.length - 1] - k - nums[0] - k;
  if (score <= 0) {
    return 0;
  }
  return score;
}

console.log(smallestRangeI([1], 0));
console.log(smallestRangeI([0, 10], 2));
console.log(smallestRangeI([1, 3, 6], 3));
