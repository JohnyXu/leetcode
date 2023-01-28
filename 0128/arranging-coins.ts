function arrangeCoins(n: number): number {
  let count: number = 0;
  for (let i = 1; i <= n; i++) {
    count += 1;
    if (n >= i) {
      n -= i;
    } else {
      break;
    }
  }
  return count;
}
