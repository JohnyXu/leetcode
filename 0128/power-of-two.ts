function isPowerOfTwo(n: number): boolean {
  if (n === 1) {
    return true;
  }
  let start: number = 1;
  while (start < n) {
    start *= 2;
  }
  return start === n;
}
