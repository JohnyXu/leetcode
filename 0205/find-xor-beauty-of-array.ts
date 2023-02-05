function xorBeauty(nums: number[]): number {
  let ans: number = 0;
  for (let i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }
  return ans;
}
