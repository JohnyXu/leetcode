function minimumCost(cost: number[]): number {
  let sum: number = 0;
  cost.sort((a, b) => b - a);

  let newCost: number[] = [];
  if (cost.length % 3 === 1) {
    sum += cost[cost.length - 1];
    newCost = cost.filter((num, index) => {
      return index !== cost.length - 1;
    });
  } else if (cost.length % 3 === 2) {
    sum += cost[cost.length - 2] + cost[cost.length - 1];
    newCost = cost.filter((num, index) => {
      return index !== cost.length - 1 && index !== cost.length - 2;
    });
  } else {
    newCost = cost;
  }

  for (let i = 0; i < newCost.length; i += 3) {
    sum += newCost[i] + newCost[i + 1];
  }
  return sum;
}

console.log(minimumCost([6, 5, 7, 9, 2, 2]));
console.log(minimumCost([5, 5]));
