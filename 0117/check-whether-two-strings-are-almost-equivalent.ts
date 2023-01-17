function getMapping(s: string): Map<string, number> {
  const mapping: Map<string, number> = new Map<string, number>();
  for (const ch of s) {
    mapping.set(ch, (mapping.get(ch) || 0) + 1);
  }
  return mapping;
}

function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const mapping1: Map<string, number> = getMapping(word1);
  const mapping2: Map<string, number> = getMapping(word2);

  for (const key of mapping1.keys()) {
    const count1: number = (mapping1.get(key) ?? 0) as number;
    const count2: number = (mapping2.get(key) ?? 0) as number;
    if (Math.abs(count2 - count1) > 3) {
      return false;
    }
  }

  for (const key of mapping2.keys()) {
    const count1: number = (mapping1.get(key) ?? 0) as number;
    const count2: number = (mapping2.get(key) ?? 0) as number;
    if (Math.abs(count2 - count1) > 3) {
      return false;
    }
  }
  return true;
}
