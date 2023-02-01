function findDuplicates(nums: number[]): number[] {
  let ans: number[] = [];
  const mapping = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    mapping.set(num, (mapping.get(num) ?? 0) + 1);
  }
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key) as number;
    if (count > 1) {
      ans.push(key);
    }
  }
  return ans;
}
