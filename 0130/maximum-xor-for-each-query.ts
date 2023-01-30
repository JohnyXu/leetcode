function getMaximumXor(nums: number[], maximumBit: number): number[] {
  let ans: number[] = [];

  const maxValue = Math.pow(2, maximumBit) - 1;
  for (let i = nums.length; i >= 1; i--) {
    let start: number = maxValue;
    for (let j = 0; j < i; j++) {
      start = start ^ nums[j];
    }
    ans.push(start);
  }
  return ans;
}
