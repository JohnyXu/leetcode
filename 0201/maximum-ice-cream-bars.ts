function maxIceCream(costs: number[], coins: number): number {
  let count: number = 0;
  costs.sort((a, b) => a - b);
  for (let i = 0; i < costs.length; i++) {
    const price = costs[i];
    if (coins >= price) {
      count++;
      coins -= price;
    }
  }
  return count;
}
