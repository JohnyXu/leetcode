function areOccurrencesEqual(s: string): boolean {
  const mapping: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    mapping.set(s[i], (mapping.get(s[i]) || 0) + 1);
  }
  let firstCount: number = mapping.get(s[0]) as number;
  for (const key of mapping.keys()) {
    if (firstCount !== mapping.get(key)) {
      return false;
    }
  }
  return true;
}

console.log(areOccurrencesEqual('abacbc'));
console.log(areOccurrencesEqual('aaabb'));
