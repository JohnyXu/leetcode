function tribonacci(n: number): number {
  let dp: number[] = Array.from<number>({ length: n + 1 }).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }
  return dp[n];
}
