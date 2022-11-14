function maxAscendingSum(nums: number[]): number {
  let maxSum: number = 0;
  let current: number = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current += nums[i];
    } else {
      if (current > maxSum) {
        maxSum = current;
      }
      current = nums[i];
    }
  }
  return current > maxSum ? current : maxSum;
}
console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
console.log(maxAscendingSum([10, 20, 30, 40, 50]));
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]));
