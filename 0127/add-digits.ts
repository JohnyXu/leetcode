function getSum(n: number) {
  if (Math.floor(n / 10) === 0) {
    return n;
  }
  let target: number = n;
  let sum = 0;
  while (target !== 0) {
    sum += target % 10;
    target = Math.floor(target / 10);
  }
  return getSum(sum);
}

function addDigits(num: number): number {
  return getSum(num);
}
