function sortArrayByParityII(nums: number[]): number[] {
  const odds: number[] = nums.filter((num) => num % 2 == 1);
  const evens: number[] = nums.filter((num) => num % 2 == 0);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      nums[i] = evens[Math.floor(i / 2)];
    } else {
      nums[i] = odds[Math.floor(i / 2)];
    }
  }
  return nums;
}

console.log(sortArrayByParityII([4, 2, 5, 7]));
console.log(sortArrayByParityII([2, 3]));
