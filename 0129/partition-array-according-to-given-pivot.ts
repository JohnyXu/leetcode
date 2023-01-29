function pivotArray(nums: number[], pivot: number): number[] {
  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n < pivot) {
      ans.push(n);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n === pivot) {
      ans.push(n);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n > pivot) {
      ans.push(n);
    }
  }
  return ans;
}
