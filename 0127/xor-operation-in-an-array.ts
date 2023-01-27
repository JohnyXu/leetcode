function xorOperation(n: number, start: number): number {
  let ans: number[] = [];
  for (let i = 0; i < n; i++) {
    ans[i] = start + 2 * i;
  }
  let prev: number = ans[0];
  for (let i = 1; i < ans.length; i++) {
    prev ^= ans[i];
  }
  return prev;
}

console.log(0 ^ 2 ^ 4 ^ 6 ^ 8);
