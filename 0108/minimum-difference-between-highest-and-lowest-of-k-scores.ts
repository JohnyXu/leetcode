function minimumDifference(nums: number[], k: number): number {
  if (k === 1) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let minimum = nums[nums.length - 1] - nums[0];
  for (let i = 0; i < nums.length - k + 1; i++) {
    let newNums: number[] = nums.filter((num, index) => {
      return index >= i && index < i + k;
    });
    const cur = newNums[0];
    const next = newNums[newNums.length - 1];
    if (next - cur < minimum) {
      minimum = next - cur;
    }
  }
  return minimum;
}

console.log(minimumDifference([30], 1));
console.log(minimumDifference([9, 4, 1, 7], 2));
console.log(minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6));
