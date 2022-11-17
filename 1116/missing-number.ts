function missingNumber(nums: number[]): number {
  let sum: number = nums.reduce((total, current, index) => {
    return total + index + 1;
  }, 0);

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    sum -= element;
  }
  return sum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
