function numberOfSteps(num: number): number {
  let count: number = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    count += 1;
  }
  return count;
}
