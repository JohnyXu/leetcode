function minimumOperations(nums: number[]): number {
  let count: number = 0;
  nums.sort((a, b) => a - b);
  while (true) {
    const sub = nums.find((num) => num != 0);
    if (!sub) {
      break;
    }
    for (let i = 0; i < nums.length; i++) {
      const val = nums[i];
      if (val >= sub) {
        nums[i] = val - sub;
      }
    }
    count += 1;
  }
  return count;
}

console.log(minimumOperations([1, 5, 0, 3, 5]));
