function isPowerOfFour(n: number): boolean {
  if (n === 1) {
    return true;
  }
  let start: number = 1;
  while (start < n) {
    start *= 4;
  }
  return start === n;
}
