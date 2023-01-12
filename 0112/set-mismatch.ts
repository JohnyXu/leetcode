function findErrorNums(nums: number[]): number[] {
  const mapping: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    mapping.set(cur, (mapping.get(cur) || 0) + 1);
  }

  let first: number = 0;
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key) as number;
    if (count === 2) {
      first = key;
    }
  }
  const sum: number = nums.reduce((acc, cur) => acc + cur, 0);
  const sum2: number = nums.reduce((acc, cur, idx) => acc + idx + 1, 0);
  const second: number = sum2 - sum + first;
  return [first, second];
}

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
