function partitionArray(nums: number[], k: number): number {
  if (nums.length === 1) {
    return 1;
  }
  nums.sort((a, b) => {
    return a - b;
  });
  let count: number = 0;
  let prev: number = nums[0];
  let lastIdx: number = 0;

  const sets = new Set();
  sets.add(prev);
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    if (cur - prev > k) {
      count++;
      prev = cur;
      lastIdx = i;
    } else {
      sets.add(cur);
    }
  }
  if (sets.size != nums.length || lastIdx !== nums.length - 1) {
    count++;
  }
  return count;
}
