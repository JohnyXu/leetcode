function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);
  if (nums.length % 2 === 1) {
    return nums[Math.floor(nums.length / 2)];
  }
  if (nums.length <= 1) {
    return nums[0];
  }
  const half: number = nums.length / 2;
  if (nums[half] === nums[half - 1]) {
    return nums[half];
  }
  return nums[half + 1];
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
