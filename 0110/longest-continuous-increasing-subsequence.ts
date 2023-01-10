function findLengthOfLCIS(nums: number[]): number {
  let maximum: number = 0;
  let count: number = 1;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (i > 0) {
      const prev = nums[i - 1];
      if (cur > prev) {
        count += 1;
      } else {
        count = 1;
      }
    }
    if (count > maximum) {
      maximum = count;
    }
  }
  return maximum;
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
