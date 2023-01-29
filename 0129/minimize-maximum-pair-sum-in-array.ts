function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const half: number = nums.length / 2;
  let maximum = -1;
  for (let i = 0; i < half; i++) {
    maximum = Math.max(maximum, nums[i] + nums[nums.length - i - 1]);
  }
  return maximum;
}
