function subtractProductAndSum(n: number): number {
  let nums: number[] = [];
  while (n !== 0) {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  }
  let sum: number = nums.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  let product: number = nums.reduce((acc, cur) => {
    return acc * cur;
  }, 1);
  return product - sum;
}
