function countTriples(n: number): number {
  let count: number = 0;

  let sets = new Set();
  for (let i = 1; i <= n; i++) {
    sets.add(i * i);
  }
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum: number = i * i + j * j;
      if (sets.has(sum)) {
        count++;
      }
    }
  }
  return count * 2;
}
