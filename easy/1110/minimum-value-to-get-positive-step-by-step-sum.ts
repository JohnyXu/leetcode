function minStartValue(nums: number[]): number {
  let sum: number = 0;
  let min: number = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const num: number = nums[i];
    if (sum + num < min) {
      min = sum + num;
    }
    sum += num;
  }
  if (min >= 1) {
    return 1;
  }
  return 1 - min;
}

console.log(minStartValue([-3, 2, -3, 4, 2]));
console.log(minStartValue([1, 2]));
console.log(minStartValue([1, -2, -3]));
