function maxProfit(prices: number[]): number {
  let maxValue = 0;
  let ans: number[] = Array.from({ length: prices.length }).map((val, index) => {
    return index;
  });

  ans[prices.length - 1] = prices[prices.length - 1];
  for (let i = prices.length - 2; i >= 0; i--) {
    ans[i] = Math.max(prices[i], ans[i + 1]);
  }
  for (let i = 0; i < prices.length; i++) {
    let profit: number = ans[i] - prices[i];
    maxValue = Math.max(profit, maxValue);
  }
  return maxValue;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
