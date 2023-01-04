function countPoints(rings: string): number {
  let pairs: string[] = [];
  for (let i = 0; i < rings.length; i += 2) {
    pairs.push(rings[i] + rings[i + 1]);
  }
  const mappings: Map<number, Set<string>> = new Map<number, Set<string>>();

  for (const pair of pairs) {
    const arr: string[] = pair.split('');
    const [first, second] = arr;
    const num: number = parseInt(second);
    if (mappings.has(num)) {
      const sets: Set<string> = mappings.get(num) as Set<string>;
      sets.add(first);
    } else {
      const sets: Set<string> = new Set<string>();
      sets.add(first);
      mappings.set(num, sets);
    }
  }

  let count: number = 0;
  for (const sets of mappings.values()) {
    if (sets.size >= 3) {
      count += 1;
    }
  }
  return count;
}

console.log(countPoints('B0R0G0R9R0B0G0'));
console.log(countPoints('B0B6G0R6R0R6G9'));
console.log(countPoints('G4'));
