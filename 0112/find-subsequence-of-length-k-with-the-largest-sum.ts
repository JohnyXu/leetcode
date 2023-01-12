function maxSubsequence(nums: number[], k: number): number[] {
  const newNums: number[] = nums.map((val) => val);
  newNums.sort((a, b) => b - a);

  let res: number[] = [];
  let sum: number = 0;

  let mapping: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < k; i++) {
    const cur = newNums[i];
    sum += cur;
    res.push(cur);
    mapping.set(cur, (mapping.get(cur) || 0) + 1);
  }

  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (mapping.has(cur)) {
      let count: number = mapping.get(cur) as number;
      if (count > 0) {
        mapping.set(cur, count - 1);
        ans.push(cur);
      }
    }
  }
  return ans;
}

console.log(maxSubsequence([2, 1, 3, 3], 2));
console.log(maxSubsequence([-1, -2, 3, 4], 3));
console.log(maxSubsequence([3, 4, 3, 3], 2));
console.log(maxSubsequence([50, -75], 2));
