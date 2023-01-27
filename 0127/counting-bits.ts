function countBits(n: number): number[] {
  let dp: number[] = Array.from<number>({ length: n + 1 }).fill(0);
  for (let i = 0; i <= n; i++) {
    let num: number = i;
    let count: number = 0;
    while (num !== 0 || num > 0) {
      if (num % 2) {
        count += 1;
      }
      num = num >> 1;
    }
    dp[i] = count;
  }
  return dp;
}
