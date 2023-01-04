function isPowerOfThree(n: number): boolean {
  while (n > 1) {
    n = n / 3;
  }
  return n === 1;
}

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
