function sumBase(n: number, k: number): number {
  let nums: number[] = [];
  while (n !== 0) {
    nums.push(n % k);
    n = Math.floor(n / k);
  }
  return nums.reduce((acc, cur) => acc + cur, 0);
}
