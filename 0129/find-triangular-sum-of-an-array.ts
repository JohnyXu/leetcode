function triangularSum(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  while (true) {
    let newNums: number[] = Array.from<number>({ length: nums.length - 1 }).fill(0);
    for (let i = 0; i < newNums.length; i++) {
      newNums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums = newNums;
    if (nums.length === 1) {
      break;
    }
  }
  return nums[0];
}

console.log(triangularSum([1, 2, 3, 4, 5]));
