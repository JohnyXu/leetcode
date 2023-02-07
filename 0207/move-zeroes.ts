function moveZeroes(nums: number[]): void {
  let p: number = removeElement(nums, 0);
  for (; p < nums.length; p++) {
    nums[p] = 0;
  }
}

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
