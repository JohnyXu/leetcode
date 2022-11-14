function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === key) {
      ans.push(i);
    }
  }
  let res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < ans.length; j++) {
      if (Math.abs(i - ans[j]) <= k) {
        res.push(i);
        break;
      }
    }
  }
  return res;
}

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1));
console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2));
