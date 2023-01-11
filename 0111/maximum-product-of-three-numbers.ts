//REVIEW
function maximumProduct(nums: number[]): number {
  if (nums.length <= 3) {
    return nums[0] * nums[1] * nums[2];
  }
  nums.sort((a, b) => a - b);
  const len: number = nums.length;
  return Math.max(nums[0] * nums[1] * nums[len - 1], nums[len - 1] * nums[len - 2] * nums[len - 3]);
}
