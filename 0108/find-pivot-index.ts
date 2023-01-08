function pivotIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let sum1: number = 0;
    let sum2: number = 0;
    for (let left = 0; left < i; left++) {
      sum1 += nums[left];
    }
    for (let right = i + 1; right < nums.length; right++) {
      sum2 += nums[right];
    }
    if (sum1 === sum2) {
      return i;
    }
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
