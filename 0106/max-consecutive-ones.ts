function findMaxConsecutiveOnes(nums: number[]): number {
  let count: number = 0;
  let maximum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur !== 1) {
      if (count > maximum) {
        maximum = count;
      }
      count = 0;
    } else {
      count += 1;
    }
  }
  if (count > maximum) {
    maximum = count;
  }
  return maximum;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
