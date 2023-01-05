function getMinDistance(nums: number[], target: number, start: number): number {
  let minimum = nums.length;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur === target) {
      if (Math.abs(i - start) < minimum) {
        minimum = Math.abs(i - start);
      }
    }
  }
  return minimum;
}

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
console.log(getMinDistance([1], 1, 0));
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
