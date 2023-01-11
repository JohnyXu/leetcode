function findMaxAverage(nums: number[], k: number): number {
  let maximum: number = nums
    .filter((val, idx) => {
      return idx < k;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  let prevSum: number = maximum;
  for (let i = k; i < nums.length; i++) {
    const sum = prevSum + nums[i] - nums[i - k];
    if (sum > maximum) {
      maximum = sum;
    }
    prevSum = sum;
  }
  return parseFloat((maximum / k).toFixed(5));
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([7, 4, 5, 8, 8, 3, 9, 8, 7, 6], 7));
