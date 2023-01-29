function rearrangeArray(nums: number[]): number[] {
  let positives: number[] = [];
  let negatives: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n > 0) {
      positives.push(n);
    } else {
      negatives.push(n);
    }
  }
  let ans: number[] = [];
  let j = 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      ans.push(positives[j++]);
    } else {
      ans.push(negatives[k++]);
    }
  }
  return ans;
}
