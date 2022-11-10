function findFinalValue(nums: number[], original: number): number {
  while (nums.find((num) => num == original)) {
    original = original * 2;
  }
  return original;
}
