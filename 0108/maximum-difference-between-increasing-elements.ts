function maximumDifference(nums: number[]): number {
  let maxs: number[] = Array.from<number>({ length: nums.length }).fill(0);
  maxs[maxs.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    const cur = nums[i];
    maxs[i] = Math.max(cur, maxs[i + 1]);
  }

  let maximum: number = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    const cur = nums[i];
    const next = maxs[i + 1];
    if (next - cur > maximum && next - cur > 0) {
      maximum = next - cur;
    }
  }
  return maximum;
}

console.log(maximumDifference([7, 1, 5, 4]));
console.log(maximumDifference([9, 4, 3, 2]));
console.log(maximumDifference([1, 5, 2, 10]));
