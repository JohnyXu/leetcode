function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const sets = new Set<number>([]);
  let item1Keys: number[] = items1.map((item) => {
    return item[0];
  });
  let item2Keys: number[] = items2.map((item) => {
    return item[0];
  });
  for (const key of item1Keys) {
    sets.add(key);
  }
  for (const key of item2Keys) {
    sets.add(key);
  }
  let keys: number[][] = [];
  for (const num of sets) {
    keys.push([num, 0]);
  }

  const items1Map: { [key: number]: number } = {};
  items1.forEach((item) => {
    const [key, count] = item;
    items1Map[key] = count;
  });
  const items2Map: { [key: number]: number } = {};
  items2.forEach((item) => {
    const [key, count] = item;
    items2Map[key] = count;
  });

  for (let i = 0; i < keys.length; i++) {
    let finalCount = 0;
    const [key, count] = keys[i];
    finalCount = (items1Map[key] || 0) + (items2Map[key] || 0);
    keys[i] = [key, finalCount];
  }

  return keys.sort((a, b) => a[0] - b[0]);
}

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ],
  ),
);
