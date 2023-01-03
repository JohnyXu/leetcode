function calculate(num: number): number {
  const arr: number[] = num
    .toString()
    .split('')
    .map((val) => parseInt(val));

  return arr.reduce((acc, cur) => {
    return acc + cur * cur;
  }, 0);
}

function isHappy(n: number): boolean {
  let result: number = calculate(n);
  let set: Set<number> = new Set<number>();
  while (result !== 1) {
    set.add(result);
    result = calculate(result);
    if (set.has(result)) {
      return false;
    }
  }
  return true;
}
console.log(isHappy(19));
console.log(isHappy(2));
