function pivotInteger(n: number): number {
  if (n === 1) {
    return n;
  }
  let sum: number = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  let total: number = 0;
  for (let i = 0; i < n; i++) {
    total += i;
    if (total * 2 === sum + i) {
      return i;
    }
  }
  return -1;
}
