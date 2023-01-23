function findTheDifference(s: string, t: string): string {
  const mapping: Map<string, number> = new Map<string, number>();
  for (const ch of t) {
    mapping.set(ch, (mapping.get(ch) || 0) + 1);
  }
  for (const ch of s) {
    mapping.set(ch, (mapping.get(ch) || 0) - 1);
  }
  let ans: string = '';
  for (const ch of mapping.keys()) {
    const count: number = mapping.get(ch) as number;
    if (count === 1) {
      ans = ch;
      break;
    }
  }
  return ans;
}
