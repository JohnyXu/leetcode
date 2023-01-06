function fillCups(amount: number[]): number {
  if (amount[0] === amount[1] && amount[1] === amount[2] && amount[0] === 0) {
    return 0;
  }

  let count = 0;
  while (true) {
    amount.sort((a, b) => b - a);
    if (amount[0] >= 1) {
      amount[0] -= 1;
    }
    if (amount[1] >= 1) {
      amount[1] -= 1;
    }
    count += 1;
    if (amount[0] === amount[1] && amount[1] === amount[2] && amount[0] === 0) {
      break;
    }
  }
  return count;
}
console.log(fillCups([5, 4, 4]));
console.log(fillCups([5, 0, 0]));
