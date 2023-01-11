function findClosestNumber(nums: number[]): number {
  let largest: number = nums[0];
  let minimum: number = Math.abs(largest);
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    if (Math.abs(cur) < minimum) {
      minimum = Math.abs(cur);
      largest = cur;
    }
    if (Math.abs(cur) === minimum) {
      if (cur > largest) {
        largest = cur;
      }
    }
  }
  return largest;
}

console.log(findClosestNumber([-4, -2, 1, 4, 8]));
console.log(findClosestNumber([2, -1, 1]));
