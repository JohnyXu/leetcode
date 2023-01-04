function countQuadruplets(nums: number[]): number {
  let count = 0;
  for (let a = 0; a < nums.length - 3; a++) {
    for (let b = a + 1; b < nums.length - 2; b++) {
      for (let c = b + 1; c < nums.length - 1; c++) {
        for (let d = c + 1; d < nums.length; d++) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) {
            count += 1;
          }
        }
      }
    }
  }
  return count;
}

console.log(countQuadruplets([1, 2, 3, 6]));
console.log(countQuadruplets([3, 3, 6, 4, 5]));
console.log(countQuadruplets([1, 1, 1, 3, 5]));
