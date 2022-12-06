function mostFrequent(nums: number[], key: number): number {
  const numMap: Map<number, number> = new Map<number, number>();
  let ans: number = 0;
  let max: number = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      const target: number = nums[i + 1];
      numMap.set(target, (numMap.get(target) || 0) + 1);
      const count: number = numMap.get(target) as number;
      if (count > max) {
        max = count;
        ans = nums[i + 1];
      }
    }
  }
  return ans;
}

console.log(mostFrequent([1, 100, 200, 1, 100], 1));
console.log(mostFrequent([2, 2, 2, 2, 3], 2));
console.log(mostFrequent([1, 1000, 2], 1000));
console.log(mostFrequent([2, 1, 2, 1, 2, 3], 2));
console.log(mostFrequent([11, 22, 11, 33, 11, 33], 11));
