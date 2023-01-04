function maximumPopulation(logs: number[][]): number {
  const mapping: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < logs.length; i++) {
    const [start, end] = logs[i];
    for (let j = start; j < end; j++) {
      mapping.set(j, (mapping.get(j) || 0) + 1);
    }
  }

  let maxValue = 0;
  let minYear = 2050;
  for (let i = 2050; i >= 1950; i--) {
    if (mapping.has(i)) {
      const value: number = mapping.get(i) as number;

      if (value > maxValue) {
        maxValue = value;
        minYear = i;
      } else if (value === maxValue) {
        if (minYear > i) {
          minYear = i;
        }
      }
    }
  }
  return minYear;
}

console.log(
  maximumPopulation([
    [1993, 1999],
    [2000, 2010],
  ]),
);
console.log(
  maximumPopulation([
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
  ]),
);
