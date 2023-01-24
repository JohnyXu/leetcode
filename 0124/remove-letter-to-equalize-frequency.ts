function equalFrequency(word: string): boolean {
  const mapping: Map<string, number> = new Map<string, number>();
  const chs: string[] = word.split('');
  for (let i = 0; i < chs.length; i++) {
    const ch = chs[i];
    mapping.set(ch, (mapping.get(ch) ?? 0) + 1);
  }

  const mapping2: Map<number, number> = new Map<number, number>();
  for (const ch of mapping.keys()) {
    const count: number = mapping.get(ch) ?? 0;
    mapping2.set(count, (mapping2.get(count) ?? 0) + 1);
  }
  if (mapping2.size === 1) {
    return mapping.size == 1 || [...mapping2.keys()][0] === 1;
  }
  if (mapping2.size === 2) {
    return [...mapping2.entries()].some(
      (v, i, arr) => (v[0] === 1 || v[0] - arr[i ^ 1][0] === 1) && v[1] === 1,
    );
  }

  return false;
}
