function timeRequiredToBuy(tickets: number[], k: number): number {
  let sum: number = 0;
  let count: number = tickets[k];
  for (let i = 0; i < tickets.length; i++) {
    const cost: number = tickets[i];
    if (i <= k) {
      if (cost <= count) {
        sum += cost;
      } else {
        sum += count;
      }
    } else {
      if (cost < count) {
        sum += cost;
      } else {
        sum += count - 1;
      }
    }
  }
  return sum;
}

console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
