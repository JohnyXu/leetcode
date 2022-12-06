function countElements(nums: number[]): number {
  if (nums.length <= 2) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let count: number = nums.length - 2;
  for (let i = 1; i < nums.length - 1; i++) {
    const current: number = nums[i];
    const prev: number = nums[i - 1];
    if (current === nums[0] || current === nums[nums.length - 1]) {
      count -= 1;
    }
  }
  return count;
}

console.log(countElements([11, 7, 2, 15]));
console.log(countElements([-3, 3, 3, 90]));
