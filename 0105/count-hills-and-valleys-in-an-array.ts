// UNRESOLVED
function countHillValley(nums: number[]): number {
  let count: number = 0;

  let prev = nums[0];
  for (let i = 1; i < nums.length - 1; i++) {
    const cur = nums[i];
    const next = nums[i + 1];

    if (cur == next) {
      continue;
    }
    if ((cur > next && cur > prev) || (cur < next && cur < prev)) {
      count += 1;
    }
    prev = cur;
  }
  return count;
}

// console.log(countHillValley([2, 4, 1, 1, 6, 5]));
// console.log(countHillValley([6, 6, 5, 5, 4, 1]));
// console.log(countHillValley([8, 2, 5, 7, 7, 2, 10, 3, 6, 2]));
console.log(
  countHillValley([
    49, 16, 11, 24, 82, 24, 73, 61, 62, 44, 25, 59, 3, 57, 62, 7, 38, 61, 22, 92, 90, 60, 28, 21,
    37, 54, 43, 14, 3, 64, 48, 51, 55, 55, 58, 43, 67, 46, 36, 32, 78,
  ]),
);
