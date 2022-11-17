function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; ++i) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
  // let sum: number = 0;
  // let ans: number[] = [];
  // for (let i = cost.length - 1; i > 0; i--) {
  //   const prev: number = cost[i - 1];
  //   const current: number = cost[i];
  //   if (prev <= current) {
  //     ans.push(prev);
  //     i--;
  //   } else {
  //     ans.push(current);
  //   }
  // }
  // sum = ans.reduce((total, current) => {
  //   return total + current;
  // }, 0);
  // return sum;
}

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([10, 20, 30, 40]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
