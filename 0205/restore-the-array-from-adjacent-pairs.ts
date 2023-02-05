function restoreArray(adjacentPairs: number[][]): number[] {
  let ans: number[] = [];
  let mapping = new Map();
  const mapping2 = new Map();
  const set = new Set();
  for (let i = 0; i < adjacentPairs.length; i++) {
    const [first, second] = adjacentPairs[i];
    mapping.set(first, (mapping.get(first) ?? 0) + 1);
    mapping.set(second, (mapping.get(second) ?? 0) + 1);

    mapping2.set(first, [...(mapping2.get(first) ?? []), second]);
    mapping2.set(second, [...(mapping2.get(second) ?? []), first]);
    set.add(first);
    set.add(second);
  }
  let first: number = -1;
  for (const k of mapping.keys()) {
    const count = mapping.get(k);
    if (count === 1) {
      first = k;
      break;
    }
  }
  set.delete(first);
  ans.push(first);
  let cur = first;
  while (true) {
    if (set.size === 0) {
      break;
    }
    const next: number[] = mapping2.get(cur);
    for (const n1 of next) {
      if (set.has(n1)) {
        ans.push(n1);
        set.delete(n1);
        cur = n1;
        break;
      }
    }
  }
  return ans;
}
