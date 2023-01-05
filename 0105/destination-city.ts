function destCity(paths: string[][]): string {
  const mapping: Map<string, string> = new Map<string, string>();

  for (let i = 0; i < paths.length; i++) {
    const [first, second] = paths[i];
    mapping.set(first, second);
  }

  let currentKey: string = paths[0][0];

  while (true) {
    if (mapping.get(currentKey)) {
      currentKey = mapping.get(currentKey) as string;
    } else {
      return currentKey;
    }
  }
}

console.log(
  destCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo'],
  ]),
);
console.log(
  destCity([
    ['B', 'C'],
    ['D', 'B'],
    ['C', 'A'],
  ]),
);
console.log(destCity([['A', 'Z']]));
