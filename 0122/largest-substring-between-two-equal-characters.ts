function maxLengthBetweenEqualCharacters(s: string): number {
  const mapping: Map<string, number> = new Map<string, number>();
  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s[i];
    if (!mapping.has(ch)) {
      mapping.set(ch, i);
    }
  }

  let maximum = -1;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const lastIdx: number = mapping.get(ch) || 0;
    if (lastIdx <= i) {
      continue;
    }
    let count: number = lastIdx - 1 - i;
    if (count > maximum) {
      maximum = count;
    }
  }
  return maximum;
}
