function maximumXOR(nums: number[]): number {
  let start: number = nums[0];
  for (let i = 1; i < nums.length; i++) {
    start |= nums[i];
  }
  return start;
}
