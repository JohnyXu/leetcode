function isMonotonic(nums: number[]): boolean {
  if (nums.length <= 2) {
    return true;
  }

  let step: number = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      step = nums[i] - nums[i - 1];
    }
  }

  for (let i = 1; i < nums.length; i++) {
    const d = nums[i] - nums[i - 1];
    if (d * step < 0) {
      return false;
    }
  }
  return true;
}

console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([3, 4, 2, 3]));
console.log(isMonotonic([3, 3, 3, 3, 2, 3]));
