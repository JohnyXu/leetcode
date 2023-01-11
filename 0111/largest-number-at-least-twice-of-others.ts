function dominantIndex(nums: number[]): number {
  if (nums.length <= 0) {
    return -1;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  let maximum: number = -1;
  let findIdx: number = -1;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur > maximum) {
      maximum = cur;
      findIdx = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (i !== findIdx) {
      if (cur * 2 > maximum) {
        return -1;
      }
    }
  }
  return findIdx;
}

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
