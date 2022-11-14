function findSubarrays(nums: number[]): boolean {
  const arrMap: Map<number, number> = new Map<number, number>();
  for (let i = 1; i < nums.length; i++) {
    const sum = nums[i] + nums[i - 1];
    arrMap.set(sum, (arrMap.get(sum) || 0) + 1);
  }
  for (const [key, count] of arrMap) {
    if (count > 1) {
      return true;
    }
  }
  return false;
}

console.log(findSubarrays([4, 2, 4]));
console.log(findSubarrays([1, 2, 3, 4, 5]));
console.log(findSubarrays([0, 0, 0]));
