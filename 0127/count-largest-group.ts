function getSum(n: number) {
  let sum: number = 0;
  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function countLargestGroup(n: number): number {
  const mapping = new Map();
  for (let i = 1; i <= n; i++) {
    let res: number = getSum(i);
    mapping.set(res, (mapping.get(res) ?? 0) + 1);
  }

  let maximum: number = -1;
  for (const key of mapping.keys()) {
    let count: number = mapping.get(key) ?? 0;
    if (count > maximum) {
      maximum = count;
    }
  }

  let count: number = 0;
  for (const key of mapping.keys()) {
    let cnt: number = mapping.get(key) ?? 0;
    if (cnt === maximum) {
      count++;
    }
  }
  return count;
}
