function countOperations(num1: number, num2: number): number {
  if (num1 === num2) {
    if (num1 === 0 || num2 === 0) {
      return 0;
    }
    return 1;
  }
  let count: number = 0;
  while (num1 !== 0 && num2 !== 0) {
    count++;
    if (num1 === num2) {
      break;
    } else if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
  }
  return count;
}
