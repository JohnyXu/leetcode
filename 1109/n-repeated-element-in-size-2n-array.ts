function repeatedNTimes(nums: number[]): number {
  const n = nums.length / 2;
  let countMap: { [key: number]: number } = {};
  let element: number = nums[0];
  for (let i = 0; i < nums.length; i++) {
    countMap[nums[i]] = (countMap[nums[i]] || 0) + 1;
    if (countMap[nums[i]] == n) {
      element = nums[i];
      break;
    }
  }
  return element;
}
