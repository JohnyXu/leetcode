function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let largest: number = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    const cur = nums[i];
    const next = nums[i + 1];
    const nextNext = nums[i + 2];
    if (cur + next > nextNext) {
      const perimeter: number = cur + next + nextNext;
      if (perimeter > largest) {
        largest = perimeter;
      }
    }
  }
  return largest;
}

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1, 10]));
