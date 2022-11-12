function arraySign(nums: number[]): number {
  if (nums.includes(0)) {
    return 0;
  }
  const negativeCount = nums.reduce((sum, num) => {
    return sum + (num < 0 ? 1 : 0);
  }, 0);
  return negativeCount % 2 == 1 ? -1 : 1;
}

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));
