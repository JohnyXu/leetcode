function sortedSquares(nums: number[]): number[] {
  // return nums.map((num) => num * num).sort((a, b) => a - b);
  let min = 0;
  let max = nums.length - 1;
  let res: number[] = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[max]) > Math.abs(nums[min])) {
      res.push(nums[max] * nums[max]);
      max--;
    } else {
      res.push(nums[min] * nums[min]);
      min++;
    }
  }
  return res.reverse();
}
