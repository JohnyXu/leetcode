function finalPrices(prices: number[]): number[] {
  let res: number[] = [];
  for (let i = 0; i < prices.length - 1; i++) {
    res[i] = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        res[i] = prices[i] - prices[j];
        break;
      }
    }
  }
  res[prices.length - 1] = prices[prices.length - 1];
  return res;
}
