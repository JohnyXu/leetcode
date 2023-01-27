function getSum(n: number) {
  let sum: number = 0;
  let target = n;
  while (target !== 0) {
    sum += target % 10;
    target = Math.floor(target / 10);
  }
  return sum;
}

function countEven(num: number): number {
  let count: number = 0;
  for (let i = 2; i <= num; i++) {
    let sum: number = getSum(i);
    if (sum % 2 === 0) {
      count += 1;
    }
  }
  return count;
}
