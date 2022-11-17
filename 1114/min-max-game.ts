function minMaxGame(nums: number[]): number {
  let newNums: number[] = [];
  while (true) {
    if (nums.length <= 1) {
      break;
    }
    for (let i = 0; i < nums.length; i += 2) {
      if ((i / 2) % 2 == 1) {
        newNums[i / 2] = Math.max(nums[i], nums[i + 1]);
      } else {
        newNums[i / 2] = Math.min(nums[i], nums[i + 1]);
      }
    }
    nums = newNums;
    newNums = [];
  }
  return nums[0];
}

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]));
console.log(minMaxGame([3]));
