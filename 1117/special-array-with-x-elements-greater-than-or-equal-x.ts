function specialArray(nums: number[]): number {
  const numMap: Map<number, number> = new Map<number, number>();
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] >= i) {
        numMap.set(i, (numMap.get(i) || 0) + 1);
      }
    }
  }
  let res: number = -1;
  for (const [i, count] of numMap) {
    if (i === count) {
      res = i;
      break;
    }
  }
  return res;
}

console.log(specialArray([3, 5]));
console.log(specialArray([0, 0]));
console.log(specialArray([0, 4, 3, 0, 4]));
