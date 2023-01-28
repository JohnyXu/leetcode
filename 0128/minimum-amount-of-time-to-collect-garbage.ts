function garbageCollection(garbage: string[], travel: number[]): number {
  const mapping = new Map();

  const mapLast = new Map();
  for (let i = 0; i < garbage.length; i++) {
    const arr: string[] = garbage[i].split('');
    for (const ch of arr) {
      let lastIdx: number = mapLast.get(ch) ?? 0;
      mapLast.set(ch, Math.max(lastIdx, i));
    }
  }

  for (let i = 0; i < garbage.length; i++) {
    const arr: string[] = garbage[i].split('');
    for (let j = 0; j < arr.length; j++) {
      const ch = arr[j];
      mapping.set(ch, (mapping.get(ch) ?? 0) + 1);
    }
    if (i > 0) {
      for (const key of ['P', 'G', 'M']) {
        const cnt: number = mapping.get(key) ?? 0;
        if (i <= mapLast.get(key)) {
          mapping.set(key, cnt + travel[i - 1]);
        }
      }
    }
  }

  let count: number = 0;
  for (const key of mapping.keys()) {
    count += mapping.get(key);
  }
  return count;
}

console.log(garbageCollection(['G', 'M', 'P'], [1, 3]));
