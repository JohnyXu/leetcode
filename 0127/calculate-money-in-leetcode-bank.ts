function totalMoney(n: number): number {
  let sum: number = 0;

  let weeks: number = Math.floor(n / 7);
  let lastN: number = n % 7;

  // normal
  let weekAmount: number = [1, 2, 3, 4, 5, 6, 7].reduce((acc, cur) => acc + cur, 0);
  sum += weeks * weekAmount;

  // last n day and acc
  for (let i = 1; i <= lastN; i++) {
    sum += weeks + i;
  }

  // each week
  for (let i = 1; i <= weeks; i++) {
    sum += (i - 1) * 7;
  }
  return sum;
}
