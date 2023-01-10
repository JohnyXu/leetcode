function getMaximumGenerated(n: number): number {
  if (n === 0) {
    return 0;
  }
  const ans: number[] = Array.from<number>({ length: n + 1 }).fill(0);
  ans[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      ans[i] = ans[i / 2];
    } else {
      const idx: number = (i - 1) / 2;
      ans[i] = ans[idx] + ans[idx + 1];
    }
  }

  let maximum: number = 0;
  for (const val of ans) {
    if (val > maximum) {
      maximum = val;
    }
  }
  return maximum;
}

console.log(getMaximumGenerated(7));
console.log(getMaximumGenerated(2));
console.log(getMaximumGenerated(3));
console.log(getMaximumGenerated(4));
