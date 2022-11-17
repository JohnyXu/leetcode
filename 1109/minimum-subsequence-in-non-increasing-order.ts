function minSubsequence(nums: number[]): number[] {
  let res: number[] = [];
  nums.sort((a, b) => b - a);

  const sum = nums.reduce((sum, num) => {
    return sum + num;
  }, 0);
  const sum2 = Math.floor(sum / 2);
  let newSum = 0;
  for (let i = 0; i < nums.length; i++) {
    newSum = newSum + nums[i];
    res.push(nums[i]);
    if (newSum > sum2) {
      break;
    }
  }
  return res;
}

console.log(minSubsequence([4, 3, 10, 9, 8]));
console.log(minSubsequence([4, 4, 7, 6, 7]));
