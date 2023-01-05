function mostVisited(n: number, rounds: number[]): number[] {
  const mapping: Map<number, number> = new Map<number, number>();
  let start: number = -1;

  for (let i = 0; i < rounds.length; i++) {
    const cur = rounds[i];
    if (start < 0) {
      start = cur;
    } else {
      if (start < cur) {
        for (let j = start; j < cur; j++) {
          mapping.set(j, (mapping.get(j) || 0) + 1);
        }
      } else {
        for (let j = start; j < cur + n; j++) {
          if (j <= n) {
            mapping.set(j, (mapping.get(j) || 0) + 1);
          } else {
            const indicator: number = cur + n - j;
            mapping.set(indicator, (mapping.get(indicator) || 0) + 1);
          }
        }
      }
      start = cur;
    }
  }

  const last: number = rounds[rounds.length - 1];
  mapping.set(last, (mapping.get(last) || 0) + 1);

  let ans: number[] = [];
  let maximum: number = 0;
  for (const key of mapping.keys()) {
    const count = mapping.get(key) as number;
    if (count > maximum) {
      maximum = count;
    }
  }

  for (const key of mapping.keys()) {
    const count = mapping.get(key) as number;
    if (count === maximum) {
      ans.push(key);
    }
  }
  return ans.sort((a, b) => a - b);
}

console.log(mostVisited(4, [1, 3, 1, 2]));
console.log(mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2]));
console.log(mostVisited(7, [1, 3, 5, 7]));
console.log(mostVisited(3, [3, 2, 1, 2, 1, 3, 2, 1, 2, 1, 3, 2, 3, 1]));
