// REVIEW
function maxSumAfterPartitioning(arr: number[], k: number): number {
  let n = arr.length;
  let dp: number[] = Array.from<number>({ length: n + 1 }).fill(0);
  for (let i = 1; i <= n; i++) {
    let curMax = 0;
    let best = 0;
    for (let j = 1; j <= k && i - j >= 0; j++) {
      curMax = Math.max(curMax, arr[i - j]);
      best = Math.max(best, dp[i - j] + curMax * j);
    }
    dp[i] = best;
  }
  return dp[n];
}
