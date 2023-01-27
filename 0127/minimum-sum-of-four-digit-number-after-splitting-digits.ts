function minimumSum(num: number): number {
  let nums: number[] = [];
  while (num !== 0) {
    nums.push(num % 10);
    num = Math.floor(num / 10);
  }

  nums.sort((a, b) => a - b);
  const [a, b, c, d] = nums;
  let sum1: number = +('' + a + c) + +('' + b + d);
  let sum2: number = +('' + a + d) + +('' + b + c);
  return sum1 > sum2 ? sum2 : sum1;
}
