function kLengthApart(nums: number[], k: number): boolean {
  let start: number = -1;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur === 1) {
      if (start < 0) {
        start = i;
      } else {
        if (i - start <= k) {
          return false;
        } else {
          start = i;
        }
      }
    }
  }
  return true;
}

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
console.log(kLengthApart([1, 1, 1, 1, 1], 0));
