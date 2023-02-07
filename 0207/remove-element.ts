function removeElement(nums: number[], val: number): number {
  let fast: number = 0;
  let slow: number = 0;
  while (fast !== nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
}
