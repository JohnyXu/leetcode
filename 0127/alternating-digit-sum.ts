function alternateDigitSum(n: number): number {
  return n
    .toString()
    .split('')
    .reduce((acc, cur, idx) => {
      return acc + +cur * (idx % 2 === 0 ? 1 : -1);
    }, 0);
}
