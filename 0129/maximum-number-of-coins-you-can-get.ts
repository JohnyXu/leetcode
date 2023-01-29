function maxCoins(piles: number[]): number {
  piles.sort((a, b) => b - a);
  let sum: number = 0;
  const three: number = piles.length / 3;
  const nums: number[] = piles.filter((val, i) => i < piles.length - three);
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (i % 2 === 1) {
      sum += n;
    }
  }
  return sum;
}
