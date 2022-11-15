function calculateTax(brackets: number[][], income: number): number {
  let tax: number = 0;
  for (let i = 0; i < brackets.length; i++) {
    const [upper, percent] = brackets[i];
    const incomeOrUpper: number = income > upper ? upper : income;
    if (i > 0) {
      tax += ((incomeOrUpper - brackets[i - 1][0]) * percent) / 100;
    } else {
      tax += (incomeOrUpper * percent) / 100;
    }
    if (income <= upper) {
      break;
    }
  }
  return parseFloat(tax.toFixed(5));
}
console.log(
  calculateTax(
    [
      [3, 50],
      [7, 10],
      [12, 25],
    ],
    10,
  ),
);
console.log(
  calculateTax(
    [
      [1, 0],
      [4, 25],
      [5, 50],
    ],
    2,
  ),
);
console.log(calculateTax([[2, 50]], 0));
