function singleNumber(nums: number[]): number {
  let ans: number = 0;
  for (const v of nums) {
    ans ^= v;
  }
  return ans;
}
